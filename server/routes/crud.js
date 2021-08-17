const express = require('express');
const db = require('../connections/db');
const uuid = require('uuid');
const bcrypt = require('bcryptjs');
const { generateToken,  isAuth } = require('../utils.js');

const crudRouter = express.Router();


crudRouter.post('/signup', async (req, res) => {
 let generatedUuid = uuid.v4();
let convertTZ = function (date, tzString) {
    return new Date((typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", { timeZone: tzString }));
};

let date_ob = new Date();
    let date = convertTZ(date_ob, "Africa/Accra");
    
    let sql = 'INSERT INTO profile SET ?';
        
    let createdUser = { ...req.body, password: bcrypt.hashSync(req.body.password, 8), id: generatedUuid, timestamp: date };
   
let result = await dataQueryInsert(sql, createdUser);
  
   if (result.error) {
        res.send(result);
   } else {
        delete createdUser.password;
        res.send({...createdUser, token: generateToken(createdUser) });
               
    } 
    
});


crudRouter.post('/signin', async (req, res) => {
    
    let sql = `SELECT * FROM profile WHERE email = '${req.body.email}'`;
    let user = await dataQuerySelect(sql);
    console.log(user);
    if (user.error) {
       res.send(user);
    } else {
        if (user) {
            if (bcrypt.compareSync(req.body.password, user[0].password)) {
                delete user[0].password;
                res.send({
                    ...user[0],
                    token: generateToken(user[0])
                
                });
               
            } else {
                res.send({ error: "Your username or password is wrong" });
            }
        }
       
    }

});
 




crudRouter.get('/members', isAuth, async (req, res) => {
   
    let sql = 'SELECT * FROM profile';
    let results = await dataQuerySelect(sql);
    if (results.error) {
        res.send(results);
    } else {
        for (let i = 0; i < results.length; i++){
            delete results[i].password;
          }
        res.send(results);
    } 
    
});

crudRouter.get('/members/:id', isAuth, async (req, res) => {
    let id = req.params.id;
 
    let sql = `SELECT * FROM profile WHERE id = '${id}'`;
    let results = await dataQuerySelect(sql);
    if (results.error) {
          res.send(results); 
    } else {
       
         let data = {
                id: results[0].id,
                fullname: results[0].fullname,
                memberid: results[0].memberid,
                email: results[0].email,
               phone: results[0].phone,
             constituency: results[0].constituency,
             isAdmin: results[0].isAdmin,
             imageurl: results[0].imageurl,
              timestamp: results[0].timestamp
               
            };
        
        //console.log(messageStatusObjects);
        res.send(data);
    }
   
    
});

crudRouter.put('/members/:id', isAuth, async (req, res) => {
    let id = req.params.id;
   
    let sql = `UPDATE profile SET 
    fullname = '${req.body.fullname}',
    memberid = '${req.body.memberid}',
    email = '${req.body.email}',
    phone = '${req.body.phone}',
    password = '${req.body.password}',
    constituency = '${req.body.constituency}',
    imageurl= '${req.body.imageurl}'
    WHERE id = '${id}'`;
    let results = await dataQueryUpdate(sql);
   
    if (results.error) {
          res.send(results); 
    } else {
       delete req.body.password;
        res.send(req.body);
    }
   
   
    
});

crudRouter.delete('/members', isAuth, async (req, res) => {
    let id = req.body.id;
   
    let sql = `DELETE FROM profile WHERE id = '${id}'`;
    let results = await dataQueryDelete(sql);
  
    if (results.error) {
          res.send(results); 
    } else {
       
        res.send({message:"Record deleted"});
    }
   
});


crudRouter.post('/posts', isAuth, async (req, res) => {
    let generatedUuid = uuid.v4();
    let convertTZ = function (date, tzString) {
        return new Date((typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", { timeZone: tzString }));
    };

    let date_ob = new Date().getTime();
    // let date = convertTZ(date_ob, "Africa/Accra");
   let { poster_name } = req.body;

 let sql2 = `SELECT * FROM profile WHERE fullName = '${poster_name}'`;
    let res1 =  await dataQuerySelect(sql2);
   let constituency = res1[0].constituency;

let sql = 'INSERT INTO posts SET ?';
    let data = { ...req.body, post_id: generatedUuid,  timestamp: date_ob, numberOfLikes: 0, numberOfComments: 0, constituency: constituency };
   
    let result = await dataQueryInsert(sql, { ...req.body, post_id: generatedUuid, timestamp: date_ob });
    
   if (result.error) {
        res.send(result);
   } else {
       console.log(data);
        res.send(data);
    } 
    
});

crudRouter.get('/posts', isAuth, async (req, res) => {
   
    let sql = 'SELECT * FROM posts';
    let results = await dataQuerySelect(sql);
    if (results.error) {
        res.send(results);
    } else {
        postsData = [];
        for (let i = 0; i<results.length; i++){
            let sql1 = 'SELECT * FROM likes';
            let likes = await dataQuerySelect(sql1);
             let sql2 = 'SELECT * FROM comments';
            let comments = await dataQuerySelect(sql2);
             let sql3 = `SELECT * FROM profile WHERE fullName = '${results[i].poster_name}'`;
                let res1 =  await dataQuerySelect(sql3);
             let constituency = res1[0].constituency;

            data = { ...results[i], numberOfLikes: likes.length, numberOfComments: comments.length, constituency:constituency};
            postsData.push(data);
        }
        
        res.send(postsData);
    } 
    
});

crudRouter.get('/posts/:post_id', isAuth, async (req, res) => {
    let id = req.params.post_id;
    let sql = `SELECT * FROM posts WHERE post_id: = '${id}'`;
    let post = await dataQuerySelect(sql);
    if (post.error) {
          res.send(post); 
    } else {
        let sql1 = 'SELECT * FROM likes';
            let likes = await dataQuerySelect(sql1);
             let sql2 = 'SELECT * FROM comments';
            let comments = await dataQuerySelect(sql2);
         let data = {
                post_id: id,
                poster_name: post[0].poster_name,
                message:post[0].message,
               timestamp: post[0].timestamp,
                numberOfLikes:likes.length,
                numberOfComments:comments.length
            };
        
        //console.log(messageStatusObjects);
        res.send(data);
    }
   
    
});

crudRouter.put('/posts/:id', isAuth, async (req, res) => {
    let id = req.params.id;
   
    let sql = `UPDATE post SET 
   message = '${req.body.message}',
        WHERE post_id = '${id}'`;
    let results = await dataQueryUpdate(sql);
   
    if (results.error) {
          res.send(results); 
    } else {
       
        res.send(req.body);
    }
   
   
    
});

crudRouter.delete('/posts', isAuth, async (req, res) => {
    let id = req.body.post_id;
   
    let sql = `DELETE FROM post WHERE post_id = '${id}'`;
    let results = await dataQueryDelete(sql);
  
    if (results.error) {
          res.send(results); 
    } else {
       
        res.send({message:"Record deleted"});
    }
   
});


crudRouter.post('/comments',isAuth, async (req, res) => {
 let generatedUuid = uuid.v4();
let convertTZ = function (date, tzString) {
    return new Date((typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", { timeZone: tzString }));
};

let date_ob = new Date();
let date = convertTZ(date_ob, "Africa/Accra");
let sql = 'INSERT INTO comments SET ?';
    let data = { ...req.body, comment_id: generatedUuid, timestamp: date };
   
let result = await dataQueryInsert(sql, data);
    
   if (result.error) {
        res.send(result);
    } else {
        res.send(data);
    } 
    
});



crudRouter.get('/comments/:post_id', isAuth, async (req, res) => {
    let id = req.params.post_id;
    let sql = `SELECT * FROM comments WHERE post_id: = '${id}'`;
    let comments = await dataQuerySelect(sql);
    if (comments.error) {
          res.send(comments); 
    } else {
      
        
        //console.log(messageStatusObjects);
        res.send(comments);
    }
   
    
});

crudRouter.put('/comments/:comment_id', isAuth,  async (req, res) => {
    let id = req.params.comment_id;
   
    let sql = `UPDATE comments SET 
   comment = '${req.body.comment}',
        WHERE comment_id = '${id}'`;
    let results = await dataQueryUpdate(sql);
   
    if (results.error) {
          res.send(results); 
    } else {
       
        res.send(req.body);
    }
   
   
    
});

crudRouter.delete('/comments', isAuth, async (req, res) => {
    let id = req.body.comment_id;
   
    let sql = `DELETE FROM comments WHERE comment_id = '${id}'`;
    let results = await dataQueryDelete(sql);
  
    if (results.error) {
          res.send(results); 
    } else {
       
        res.send({message:"Record deleted"});
    }
   
});

crudRouter.post('/likes', isAuth, async (req, res) => {
 let generatedUuid = uuid.v4();

let sql = 'INSERT INTO likes SET ?';
    let data = { ...req.body, likes_id: generatedUuid };
   
let result = await dataQueryInsert(sql, data);
    
   if (result.error) {
        res.send(results);
    } else {
        res.send(data);
    } 
    
});



crudRouter.get('/likes/:post_id', isAuth, async (req, res) => {
    let id = req.params.post_id;
    let sql = `SELECT * FROM comments WHERE post_id: = '${id}'`;
    let comments = await dataQuerySelect(sql);
    if (comments.error) {
          res.send(comments); 
    } else {
      
        
        //console.log(messageStatusObjects);
        res.send(comments);
    }
   
    
});



crudRouter.delete('/likes', isAuth, async (req, res) => {
    let id = req.body.like_id;
   
    let sql = `DELETE FROM comments WHERE like_id = '${id}'`;
    let results = await dataQueryDelete(sql);
  
    if (results.error) {
          res.send(results); 
    } else {
       
        res.send({message:"Record deleted"});
    }
   
});



crudRouter.post('/jobs',isAuth, async (req, res) => {
 let generatedUuid = uuid.v4();
let convertTZ = function (date, tzString) {
    return new Date((typeof date === "string" ? new Date(date) : date).toLocaleString("en-US", { timeZone: tzString }));
};

let date_ob = new Date();
let date = convertTZ(date_ob, "Africa/Accra");
let sql = 'INSERT INTO jobs SET ?';
    let data = { ...req.body, post_id: generatedUuid, timestamp: date };
    delete data.password;
let result = await dataQueryInsert(sql, data);
    
   if (result.error) {
        res.send(result);
    } else {
        res.send(data);
    } 
    
});

crudRouter.get('/jobs', isAuth, async (req, res) => {
   
    let sql = 'SELECT * FROM jobs';
    let results = await dataQuerySelect(sql);
    if (results.error) {
        res.send(results);
    } else {
      
        res.send(results);
    } 
    
});

crudRouter.get('/jobs/:post_id', isAuth, async (req, res) => {
    let id = req.params.post_id;
 
    let sql = `SELECT * FROM jobs WHERE post_id = '${id}'`;
    let results = await dataQuerySelect(sql);
    if (results.error) {
          res.send(results); 
    } else {
       
         let data = {
                post_id: results[0].id,
                heading: results[0].heading,
                content: results[0].content,
                link: results[0].link,
                timestamp: results[0].timestamp
               
            };
        
        //console.log(messageStatusObjects);
        res.send(data);
    }
   
    
});

crudRouter.put('/jobs/:post_id', isAuth,  async (req, res) => {
    let id = req.params.post_id;
   
    let sql = `UPDATE jobs SET 
    heading = '${req.body.heading}',
    content = '${req.body.content}',
    link = '${req.body.link}'
    
    WHERE post_id = '${id}'`;
    let results = await dataQueryUpdate(sql);
   
    if (results.error) {
          res.send(results); 
    } else {
      
        res.send(req.body);
    }
   
   
    
});

crudRouter.delete('/jobs', isAuth, async (req, res) => {
    let id = req.body.id;
   
    let sql = `DELETE FROM jobs WHERE post_id = '${id}'`;
    let results = await dataQueryDelete(sql);
  
    if (results.error) {
          res.send(results); 
    } else {
       
        res.send({message:"Record deleted"});
    }
   
});







let dataQuerySelect =  (sql) => {
 
  return  new Promise((resolve, reject) => db.query(sql, (err, results) => {
    
        if (err) {
            reject(err);
        } else {
            resolve(results);
        }
    }))
        .then(data => {
            return data;
        })
        .catch(err => {
             
          return { message: "Opps!!! something went wrong, please try again later", error: err.message };
        });
     
};

let dataQueryInsert = (sql, data) => {
   
   return new Promise((resolve, reject) => db.query(sql, data, (err, results) => {
    
      if (err) {
            reject(err);
        } else {
            resolve(results);
        }
    }))
         .then(data => {
            return data;
        })
        .catch(err => {
         
             
          return { message: "Opps!!! something went wrong, please try again later", error: err.message };
        });
};
let dataQueryUpdate = (sql) => {
 
   return new Promise((resolve, reject) => db.query(sql, (err, results) => {
    if (err) {
            reject(err);
        } else {
            resolve(results);
        }
    }))
         .then(data => {
            return data;
        })
        .catch(err => {
                        
          return { message: "Opps!!! something went wrong, please try again later", error: err.message };
        });
};

let dataQueryDelete = (sql) => {
 
    return new Promise((resolve, reject) => db.query(sql, (err, results) => {
    if (err) {
            reject(err);
        } else {
            resolve(results);
        }
    }))
         .then(data => {
            return data;
        })
        .catch(err => {
            
          return { message: "Opps!!! something went wrong, please try again later", error: err.message };
        });
};



module.exports = crudRouter;
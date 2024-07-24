// Express

// crud operation 4

//craete >>>> post
//read >>>>> get
//update >>>>>patch
//delete >>>>> delete
/////////////////////////////////////

// local host : 3000  5000  node

const express = require("express")
const app = express()

//const port = 3000

    const port = process.env.PORT || 3000

    app.get('/' , (req,res) => {
        res.send("hello home page....")
    })

    app.get('/prices' , (req,res) => {
        res.send("priesss page....")
    })

    app.get('/about' , (req,res) => {
        res.send("Abouuuut page....")
    })

    app.get('/page1' , (req,res) => {
        res.send("<h2>my name is ziad</h2>")
    })

    app.get('/page2' , (req,res) => {
        res.send({
            name:"ziad",
            age:21,
            city:"Assiut"
        })
    })

    
    app.get('/page3' , (req,res) => {
        res.send("team page3 content....")
    })

    //////////////////////////////////////////////////////////////
        //static path : 

        const path = require("path")

        console.log(__dirname)

        console.log(path.join(__dirname , '../public'))

        app.use(express.static(x))
        ///////////////////////////////////////////////////

        //hps

        app.set('view engine' , 'hbs');

        const viewsDirectory = path.join(__dirname , "../temp1/views")
        app.set("views" , viewsDirectory)

        /////////////////////////////////////////////////

        var hbs = require ('hbs')

        const partialspath = path.join(__dirname , "../temp1/partials")

        hbs.registerPartials(partialspath)
        //////////////////////////////////////////////

        


        app.get('/' , (req,res)=>{
            res.render('index',{
                title:"Home",
                desc:"this is home page"
            })
        })

        app.get('/service' , (req,res)=>{
            res.render('service',{
                title:"Service",
                desc:"abdo",
                age:26,
                imge:"images/5555.jpg"
            })
        })

        app.get('/team' , (req,res)=>{
            res.render('team',{
                title:"TEAM",
                desc:"Ahmed",
                age:26,
                imge:"images/5555.jpg"
            })
        })


    

    app.listen(port , () =>{
        console.log("app is listening on port 3000")
    })




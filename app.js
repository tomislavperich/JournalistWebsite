var express = require("express");
var app = express();

app.use(express.static("public"));
app.set("view engine", "ejs");

app.get("/", function(req, res) {
    var articles = [
        {
            image: "img/article1.jpg",
            title: "Article 1", 
            author: "John Doe",
            content: "This is content of article 1",
        },
        {
            image: "img/article2.jpg",
            title: "Article 2", 
            author: "Jack Bauer",
            content: "This is content of article 2",
        },
        {
            image: "img/article3.jpg",
            title: "Article 3", 
            author: "Joe Weeck",
            content: "This is content of article 3",
        }
    ];
    
    var recent = [
        {
            title: "Recent 1", 
            author: "John Doe",
            content: "This is content of article 1",
        },
        {
            title: "Recent 2", 
            author: "Jack Bauer",
            content: "This is content of article 2",
        },
        {
            title: "Recent 3", 
            author: "Joe Weeck",
            content: "This is content of article 3",
        }
    ];
    
    var popular = [
        {
            title: "Popular 1", 
            author: "John",
            content: "This is content of article 1",
        },
        {
            title: "Popular 2", 
            author: "Jack",
            content: "This is content of article 2",
        },
        {
            title: "Popular 3", 
            author: "Joe",
            content: "This is content of article 3",
        }
    ];
    
    var lorem = `Sunt et nulla aut sapiente sit pariatur voluptas minima. 
                A consequatur occaecati doloremque est a. Eveniet amet 
                similique impedit aliquam id et rem dicta. Vero sed 
                voluptatum mollitia. Qui provident repellendus omnis 
                inventore laborum. Soluta ratione ad quasi possimus animi 
                porro. 
                
                Odio tempore sint ea voluptatibus. Officiis laboriosam 
                dolor non dolor dicta qui beatae porro. Voluptatum 
                perspiciatis non nobis.`;
                
    var lorem_small = `Odio tempore sint ea voluptatibus. Officiis laboriosam 
                dolor non dolor dicta qui beatae porro. Voluptatum 
                perspiciatis non nobis.`;
    
    res.render("home", {
        articles: articles, 
        recent: recent, 
        popular: popular,
        lorem: lorem,
        lorem_small: lorem_small,
    });
});


app.listen(process.env.PORT, process.env.IP, function() {
    console.log("[+] Server running");
});
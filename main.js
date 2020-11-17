var names=[
    "Riddhi Goyal (me)",
    "Siddhi Goyal (Sister)",
    "Viveka Goyal (Mother)",
    "Pankaj Goyal (Father)",
    "Shubas Chandra Goyal (Grandfather)",
    "Chandra Kanta Goyal (Grandmother)",
    ""
    ];
    var images=[
        "images of my family/3.jpeg",
        "images of my family/2.jpg",
        "images of my family/4.jpeg",
        "images of my family/1.jpg",
        "images of my family/5.jpg",
        "images of my family/6.jpg",
    ]

    var k=0;
    function change(){
    
        document.getElementById("1").innerHTML=names[k];
        document.getElementById("album").src= images[k];
        k++;
        if(k>5){
            k=0;
        } 
        document.getElementById("audio").play();
    
    
    }
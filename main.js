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
        "3.jpeg",
        "2.jpg",
        "4.jpeg",
        "1.jpg",
        "5.jpg",
        "6.jpg",
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
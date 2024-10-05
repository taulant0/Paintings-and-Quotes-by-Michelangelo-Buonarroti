
document.querySelector(".quote-button").addEventListener("click", GeneratePhotoAndQuote);
document.querySelector(".profile-button").addEventListener("click", MichelangelosProfile);


function GeneratePhotoAndQuote(){
var randomPainting = Math.floor((Math.random() * 10));
var randomQuote    = Math.floor((Math.random() * 10));

var paintings = ["./photos/Creation_of_Adam1.jpg", "./photos/TheConversionofSaul.jpg" , "./photos/Last_Judgement.jpg", "./photos/LedaandThe Swan.jpg", "./photos/Entombment_Michelangelo.jpg", "./photos/Dreamofhumanlife.jpg", "./photos/moses-sculpture.jpg", "./photos/pietassculpture.jpg", "./photos/The Torment of Saint Anthony.jpg", "./photos/TheDeposition.jpg"];

var quotes =["The true work of art is but a shadow of the divine perfection. For in its creation, the artist becomes a vessel through which the beauty of the universe is channeled. Each stroke of the brush, each line drawn, is imbued with the essence of creation itself. And in the contemplation of art, we are afforded a glimpse into the infinite, a moment of communion with the divine.",
"Art is not created in a vacuum, but is rather a reflection of the world in which it is born. It is shaped by the experiences, emotions, and aspirations of the artist, as well as the cultural and societal context in which they exist. In this way, art becomes a mirror that reflects the complexities of the human condition, offering insight into our deepest fears, desires, and dreams.", 
"To be an artist is to embrace the inherent struggle between creation and destruction, between chaos and order. For in the act of creation, we must often confront our own limitations, doubts, and fears. We must be willing to take risks, to push the boundaries of our imagination, and to challenge the conventions of our time. And in doing so, we bring forth something new and unexpected into the world.",
 "The sculptor's task is not merely to shape stone, but to breathe life into it. To infuse it with emotion, passion, and spirit. For in the hands of a master, stone becomes more than just a lifeless substance—it becomes a medium through which the human experience is expressed. And in the presence of great sculpture, we are moved not only by its beauty, but by its profound sense of humanity.", 
 "Perfection is not a destination, but a journey—a relentless pursuit of excellence that knows no end. It is the driving force behind every stroke of the brush, every chisel of the stone. And though we may never fully attain it, we are compelled to strive for it nonetheless. For in the pursuit of perfection, we discover our own capacity for growth, innovation, and self-transcendence.", 
 "The artist's greatest challenge is not in mastering their craft, but in finding the courage to express their innermost thoughts and feelings. To lay bare their soul before the world, unafraid of judgment or rejection. For it is through vulnerability that true artistry is revealed, and it is through honesty that the deepest connections between artist and audience are forged.", 
 "Art is not confined to the canvas or the sculpture, but is woven into the fabric of everyday life. It is found in the intricate patterns of a cobblestone street, the graceful arc of a cathedral spire, the delicate brushstrokes of a passing cloud. It is in these fleeting moments of beauty that we find solace, inspiration, and meaning. And it is through the eyes of the artist that we learn to see the world anew.", 
"The power of art lies not in its ability to mimic reality, but in its capacity to transcend it. To evoke emotions, stir the imagination, and awaken the soul to new possibilities. For art is the language of the heart, the voice of the divine, speaking to us across time and space. And in its presence, we are reminded of our own inherent creativity, our own capacity to shape the world around us.", 
"Every work of art is a testament to the human spirit—to our boundless creativity, our insatiable curiosity, our irrepressible desire to leave our mark on the world. And though our lives may be fleeting, our art endures, a timeless expression of who we are and what we aspire to be. For in the face of adversity, in the depths of despair, it is art that sustains us, that gives us hope, that reminds us of the beauty and wonder of life.", 
"The purpose of art is not to escape reality, but to confront it—to grapple with its complexities, to wrestle with its contradictions, to make sense of the chaos and confusion that surrounds us. For in the act of creation, we are forced to reckon with our own humanity, to confront the frailty of existence, and to find meaning amidst the uncertainty. And it is through this process of engagement that we are able to transcend our limitations, to transcend our fears, and to connect with something greater than ourselves." ];

{

    var artworkNames = ["Creation of Adam", "The Conversion of Saul", "Last Judgment", "Leda and the Swan", "The Entombment", "Dream of Human Life", "Moses Sculpture", "Pieta's Sculpture","The Torment of Saint Anthony", "The Deposition"]


document.querySelector(".first-photo").setAttribute("src", paintings[randomPainting]);
document.querySelector(".card-text").innerHTML= quotes[randomQuote]; ;
document.querySelector(".main-title").innerHTML=artworkNames[randomPainting];

}
}



function MichelangelosProfile (){
   
    document.querySelector(".main-title").innerHTML=" Michelangelo Buonarroti";
    document.querySelector(".first-photo").setAttribute("src", "./photos/Michelangelo_Daniele_da_Volterra.jpg" );
    document.querySelector(".card-text").innerHTML= "Michelangelo Buonarroti, born in 1475 in Caprese, Italy, was one of the most influential artists of the Italian Renaissance. Renowned as a sculptor, painter, architect, and poet, Michelangelo's work epitomizes the ideals of the Renaissance era. He is best known for his masterpieces such as the statue of David, the Sistine Chapel ceiling in Vatican City, and the dome of St. Peter's Basilica in Rome. Michelangelo's artistic brilliance extended beyond his technical skill; he possessed a profound understanding of human anatomy and a unique ability to capture emotion and movement in his work. His legacy continues to inspire artists and admirers worldwide, cementing his status as one of the greatest artists in history.";

}


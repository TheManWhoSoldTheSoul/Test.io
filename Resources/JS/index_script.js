window.onload = function(){
    
    
    var loading = document.getElementsByClassName('loading')[0];
    
    
        loading.classList.add("loaded");
    setTimeout(function(){
        loading.style.display="none";
    },1000);
    setTimeout(function(){
        A = "to_work";
        B = "to_contact";
        C = "to_home";
        nav_main_content();
    }, 250);
    
}

var main_content = document.getElementsByClassName("main_content")[0];
var link_click = document.getElementsByClassName("link");

var load_bar = document.getElementsByClassName('load_bar')[0];

var A; var B; var C;  var D; var E; var F;


function nav_main_content(){
    if(main_content.classList.contains(A)){
        main_content.classList.remove(A);
    }
    
    if(main_content.classList.contains(B)){
        main_content.classList.remove(B);
    }
    
    setTimeout(function(){
        main_content.classList.add(C);
    }, 1000);
    
    
    setTimeout(function(){
        var i;
        for (i = 1; i < 3; i++) { 
            link_click[i].style.visibility="visible";
            link_click[i].style.opacity="1";
        }
    },2000);
    
    
}

function actived_link(){
    
    link_click[E].classList.remove("_click");
    link_click[F].classList.add("_click");
    setTimeout(function(){
        link_click[0].classList.add("_click");
    },1000);
}

function desactiv_link(){
     link_click[0].classList.remove("_click");
    link_click[1].classList.remove("_click");
    link_click[2].classList.remove("_click");
    link_click[3].classList.remove("_click");
    link_click[4].classList.remove("_click");
    link_click[5].classList.remove("_click");
}

link_click[0].onclick = function(){
    //alert('1') home;
    
    A = "to_work";
    B = "to_contact";
    C = "to_home";
    nav_main_content();
    desactiv_link();
}

link_click[1].onclick = function(){
    //alert('2') work;
    A = "to_home";
    B = "to_contact";
    C = "to_work";
    
    //D = 0;
    E = 2;
    F = 1;
    
    actived_link();
    
    nav_main_content();


}

link_click[2].onclick = function(){
    //alert('3') contact;
    
    A = "to_home";
    B = "to_work";
    C = "to_contact";
    
    //D = 0;
    E = 1;
    F = 2;
    
    actived_link();
    
    nav_main_content();
    
}

link_click[3].onclick = function(){

    A = "to_work";
    B = "to_contact";
    C = "to_home";
    nav_main_content();
    desactiv_link();
    desactived_menu_mobile();
}

link_click[4].onclick = function(){
    //alert('2') work;
    A = "to_home";
    B = "to_contact";
    C = "to_work";
    
    //D = 0;
    E = 5;
    F = 4;
    
    actived_link();
    desactived_menu_mobile();
    nav_main_content();


}

link_click[5].onclick = function(){
    //alert('3') contact;
    
    A = "to_home";
    B = "to_work";
    C = "to_contact";
    
    //D = 0;
    E = 4;
    F = 5;
    
    actived_link();
    desactived_menu_mobile();
    nav_main_content();
    
}





var this_work = document.getElementsByClassName('this_work');
var this_work_click = this_work;

var view_work = document.getElementsByClassName('view_work')[0];

function open_work(){
    view_work.style.display="block";
    
    setTimeout(function(){
        view_work.classList.add("open");
        
    },0);
    setTimeout(function(){
        view_work.children[0].style.opacity="1";
        view_work.children[0].style.visibility="visible";
    },1000);
}

this_work_click[0].onclick = function(){
    //1
    open_work();
    view_work.children[1].style.display="block";
    setTimeout(function(){
        view_work.children[1].classList.add("view_file");
        
    },1000);
}

this_work_click[1].onclick = function(){
    //2
    open_work();
    
    open_work();
    view_work.children[2].style.display="block";
    setTimeout(function(){
        view_work.children[2].classList.add("view_file");
        
    },1000);
}

this_work_click[2].onclick = function(){
    //3
    open_work();
    
    open_work();
    view_work.children[3].style.display="block";
    setTimeout(function(){
        view_work.children[3].classList.add("view_file");
        
    },1000);
}




view_work.children[0].onclick = function(){
    
    view_work.classList.remove("open");
    setTimeout(function(){
        view_work.children[0].style.opacity="0";
        view_work.children[0].style.visibility="hidden";
    },0);
    
    if(view_work.children[1].classList.contains("view_file")){
        view_work.children[1].classList.remove("view_file");
    }
    
    if(view_work.children[2].classList.contains("view_file")){
        view_work.children[2].classList.remove("view_file");
    }
    
    if(view_work.children[3].classList.contains("view_file")){
        view_work.children[3].classList.remove("view_file");
    }
    
    setTimeout(function(){
        view_work.style.display="none";
        view_work.children[1].style.display="none";
        view_work.children[2].style.display="none";
        view_work.children[3].style.display="none";
    },1000);
   
}


var molibe_menu_btn = document.getElementsByClassName('mobile_menu_btn')[0];

var mobile_menu = document.getElementsByClassName('mobile_menu')[0];

var n_click = 0;

function actived_menu_mobile(){
    mobile_menu.style.left="0";
    mobile_menu.style.opacity="1";
}

function desactived_menu_mobile(){
    molibe_menu_btn.classList.remove("on");
    setTimeout(function(){
        mobile_menu.style.left="100%";
        mobile_menu.style.opacity="0";
        n_click = 0;
    },250);
}

molibe_menu_btn.onclick = function(){
    n_click ++;
    
    if(n_click == 1){
        molibe_menu_btn.classList.add("on");
        setTimeout(function(){
            actived_menu_mobile();
        },250);
    }
    if(n_click == 2){
        desactived_menu_mobile();
    }
    /*if(molibe_menu_btn.classList.contains("on")){
        molibe_menu_btn.classList.remove("on");
    }*/
}
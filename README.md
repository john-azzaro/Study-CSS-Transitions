# CSS Transitions Study
See it Live: https://john-azzaro.github.io/Study-CSS-Transitions/
<br>

## What is CSS Transitions Study?
The CSS Transitions Study examines the implementation of transitional effects to web pages using HTML, CSS, JavaScript, and jQuery for the buisness logic.  In this particular study, when the user scrolls down the page, the background will change colors as the second page reveals itself.  

Here are a few questions from the study to explore:

* [What are the key takeaways from the calculator study?](#What-are-the-key-takeaways-from-the-calculator-study)
* [Does CSS Transitions Study feature commentary?](#Does-CSS-Transitions-Study-feature-commentary)
* [What are the key features of CSS Transitions Study?](#What-are-the-key-features-of-CSS-Transitions-Study)
* [Screenshots](#Screenshots)
<br>

## What are the key takeaways from the calculator study?

<dl> 
<dd>

### Primary objective revolves around the background-active class.
----------
So the transition for the study is pretty basic, changes the color of the background as the user scrolls down. The effect itself is pretty straight forward, specifically that on scroll, if the if the user scroll is greater than the inner height of the window (divided by 4 so it changes at a later point in the scoll), then add the class "background-active" class. If not, remove it. 
```JavaScript
function backgroundChange() {                      
    if(window.scrollY > window.innerHeight / 4) {       
        $('body').addClass('background-active');      
    } else {                                    
        $('body').removeClass('background-active');   
    }         
}

function handleScroll() {                          
    $(window).on('scroll', backgroundChange)           
}
```

</dd>
</dl>

<br>

## Does CSS Transitions Study feature commentary?
Yes! I use extensive commentary (mostly in the form of my thought process) so that the new and curious can follow the logic in the program and get an idea of my reasoning behind each and every line of code.  In addition to my line-by-line commantary, I also provide a Process text file that gives a good outline of my implementation process. 

<br>

## What are the key features of CSS Transitions Study?
Since this study is ongoing, basic functionalities are covered first and more advanced features are added or will be added in the future:


| **Features:**                            | **Feature Notes:**                             |
| ---------------------------------------- | ----------------------------------------------|
| color transition                            |   When the user scrolls down (and back up) the background color will change color.    |



<br>

## Screenshots
![transition1](https://user-images.githubusercontent.com/37447586/62085645-f029c180-b210-11e9-9c68-75cd4615eab6.png)
![transition2](https://user-images.githubusercontent.com/37447586/62085824-63333800-b211-11e9-9da4-522ab35de105.png)



document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('.one').addEventListener('click', () => fun("rock"));
    document.querySelector('.two').addEventListener('click', () => fun("paper"));
    document.querySelector('.three').addEventListener('click', () => fun("scissors"));
});
function fun(action)
{
    const compchoice=comp()
    if(action===compchoice)
    {
        document.querySelector('.downtxt').innerHTML = '<pre><p><b>  Draw  </b></p><pre>';
        document.querySelector('.downtxt p').style.backgroundColor="blue";
        document.querySelector('.downtxt p').style.color="white";
    }
    else if(action==="rock")
    {
        if(compchoice==="paper")
        {
            document.querySelector('#comp').innerText=parseInt(document.querySelector('#comp').innerText)+1;
            document.querySelector('.downtxt').innerHTML = '<pre><p><b>  Uh! Oh! Compuet Won  </b></p><pre>';
            document.querySelector('.downtxt p').style.backgroundColor="red";
        }
        else 
        {
            document.querySelector('#u').innerText=parseInt(document.querySelector('#u').innerText)+1;
            document.querySelector('.downtxt').innerHTML = '<pre><p><b>  Yeahhhh...U Won  </b></p><pre>';
            document.querySelector('.downtxt p').style.backgroundColor="green";
        }
    }
    else if (action==="paper")
    {
        if(compchoice==="rock")
        {
            document.querySelector('#u').innerText=parseInt(document.querySelector('#u').innerText)+1;
            document.querySelector('.downtxt').innerHTML = '<pre><p><b>  Yeahhhh...U Won  </b></p><pre>';
            document.querySelector('.downtxt p').style.backgroundColor="green";
        }
        else
        {
            document.querySelector('#comp').innerText=parseInt(document.querySelector('#comp').innerText)+1;
            document.querySelector('.downtxt').innerHTML = '<pre><p><b>  Uh! Oh! Compuet Won  </b></p><pre>';
            document.querySelector('.downtxt p').style.backgroundColor="red";
        }
    }
    else if (action==="scissors")
    {
        if(compchoice==="rock")
        {
            document.querySelector('#comp').innerText=parseInt(document.querySelector('#comp').innerText)+1;
            document.querySelector('.downtxt').innerHTML = '<pre><p><b>  Uh! Oh! Compuet Won  </b></p><pre>';
            document.querySelector('.downtxt p').style.backgroundColor="red";
        }
        else
        {
            document.querySelector('#u').innerText=parseInt(document.querySelector('#u').innerText)+1;
            document.querySelector('.downtxt').innerHTML = '<pre><p><b>  Yeahhhh...U Won  </b></p><pre>';
            document.querySelector('.downtxt p').style.backgroundColor="green";
        }
    }
    document.querySelector('.downtxt p').style.color="white";

}
function comp() {
    const comchoice = Math.floor(Math.random() * 3);
    const arr = ["rock", "paper", "scissors"];
    return arr[comchoice];
}

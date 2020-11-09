var slide = 1;

function next()
{
  var image = document.getElementById("myImgId");

  if (slide==6)
  {
    slide=1;
    image.src = '1.jpg';
  }
  else if (slide==1)
  {
    slide++;
    image.src = '2.jpg';
  }
  else if (slide==2)
  {
    slide++;
    image.src = '3.jpg';
  }
  else if (slide==3)
  {
    slide++;
    image.src = '4.png';
  }
  else if (slide==4)
  {
    slide++;
    image.src = '5.jpg';
  }
  else if (slide==5)
  {
    slide++;
    image.src = '6.jpg';
  }
}

function previous()
{
  var image = document.getElementById("myImgId");

  if (slide==5)
  {
    slide--;
    image.src = '4.png';
  }
  else if (slide==6)
  {
    slide=5;
    image.src = '5.jpg';
  }
  else if (slide==1)
  {
    slide=6;
    image.src = '6.jpg';
  }
  else if (slide==2)
  {
    slide--;
    image.src = '1.jpg';
  }
  else if (slide==3)
  {
    slide--;
    image.src = '2.jpg';
  }
  else if (slide==4)
  {
    slide--;
    image.src = '3.jpg';
  }
}

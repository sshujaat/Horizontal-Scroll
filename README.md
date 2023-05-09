<!DOCTYPE html>
<html>
<head>
	<title>Tag-Filter</title>
	<style>
.menu-container {
  max-width: 1600px;
  margin: 0 auto;
  position: relative;
}

.menu {
  white-space: nowrap;
  overflow-x: auto;
  scrollbar-width: none; /* hide the scrollbar for Firefox and Edge */
  -webkit-overflow-scrolling: touch;
}

.menu::-webkit-scrollbar {
  display: none; /* hide the scrollbar for Chrome, Safari, and Opera */
}

ul {
  list-style: none;
  padding: 0;
  margin: 0;
}

li {
  display: inline-block;
}

a {
  display: block;
  padding: 15px;
  text-decoration: none;
  color: #000;
  background-color: #f7f7f7;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  border-bottom-left-radius: 20px;
  border-bottom-right-radius: 20px;
}

li:first-child a {
  border-top-left-radius: 0;
  border-bottom-left-radius: 0;
}

li:last-child a {
  border-top-right-radius: 0;
  border-bottom-right-radius: 0;
}

li.active a {
  color: #f00;
}

.arrow {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 24px;
  cursor: pointer;
}

.arrow-left {
  left: 20px;
}

.arrow-right {
  right: 20px;
}

@media screen and (max-width: 767px) {
  .menu-container {
    max-width: none;
  }

  .arrow {
    display: none;
  }
}


</style>	
	
</head>
<body>

 <div class="menu-container">
    <div class="menu">
      <div class="arrow left"><i class="fas fa-chevron-left"></i></div>
      <div class="arrow right"><i class="fas fa-chevron-right"></i></div>
      <ul>
        <li><a href="#">Link 1</a></li>
        <li><a href="#">Link 2</a></li>
        <li><a href="#">Link 3</a></li>
        <li><a href="#">Link 4</a></li>
        <li><a href="#">Link 5</a></li>
        <li><a href="#">Link 6</a></li>
        <li><a href="#">Link 7</a></li>
        <li><a href="#">Link 8</a></li>
        <li><a href="#">Link 9</a></li>
        <li><a href="#">Link 10</a></li>
        <li><a href="#">Link 11</a></li>
        <li><a href="#">Link 12</a></li>
        <li><a href="#">Link 13</a></li>
        <li class="active"><a href="#">Link 14</a></li>
        <li><a href="#">Link 15</a></li>
        <li><a href="#">Link 16</a></li>
        <li><a href="#">Link 17</a></li>
        <li><a href="#">Link 18</a></li>
        <li><a href="#">Link 19</a></li>
        <li><a href="#">Link 20</a></li>
      </ul>
    </div>
  </div>
	<script>document.addEventListener('DOMContentLoaded', () => {
  const activeLink = document.querySelector('.active');
  const menu = document.querySelector('.menu');
  const activeLinkIndex = Array.from(menu.children).indexOf(activeLink);
  const leftArrow = document.createElement('i');
  leftArrow.classList.add('fas', 'fa-chevron-left', 'arrow', 'left');
  const rightArrow = document.createElement('i');
  rightArrow.classList.add('fas', 'fa-chevron-right', 'arrow', 'right');
  const arrowsContainer = document.createElement('div');
  arrowsContainer.classList.add('arrows');
  arrowsContainer.append(leftArrow, rightArrow);
  menu.parentElement.insertBefore(arrowsContainer, menu);

  menu.scrollTo({
    left: activeLink.offsetLeft,
    behavior: 'smooth'
  });

  for (let i = 0; i < activeLinkIndex; i++) {
    menu.insertBefore(menu.lastElementChild, menu.firstElementChild);
  }

  const menuItems = Array.from(menu.children);
  const itemWidth = menuItems[0].offsetWidth;

  let scrollAmount = 0;

  function scrollToItem(index) {
    if (index < 0 || index >= menuItems.length) return;
    const item = menuItems[index];
    const offsetLeft = item.offsetLeft - menuItems[0].offsetLeft;
    menu.scrollTo({
      left: offsetLeft,
      behavior: 'smooth'
    });
    scrollAmount = offsetLeft;
  }

  leftArrow.addEventListener('click', () => {
    scrollToItem(Math.floor(scrollAmount / itemWidth) - 1);
  });

  rightArrow.addEventListener('click', () => {
    scrollToItem(Math.floor(scrollAmount / itemWidth) + 1);
  });
});</script>
</body>
</html>

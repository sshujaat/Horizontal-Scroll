<!DOCTYPE html>
<html>
<head>
	<title>Tag-Filter</title>
	<style>
.menu-container {
  max-width: 1600px;
  margin: 0 auto;
}

.menu {
  white-space: nowrap;
  overflow-x: auto;
}

@media screen and (min-width: 768px) {
  .menu {
    scrollbar-width: thin; /* Width of the scrollbar */
    scrollbar-color: #ccc #f7f7f7; /* Color of the scrollbar */
  }

  .menu::-webkit-scrollbar {
    width: 8px; /* Width of the scrollbar */
    height: 8px;
  }

  .menu::-webkit-scrollbar-track {
    background-color: #f7f7f7; /* Background color of the scrollbar track */
  }

  .menu::-webkit-scrollbar-thumb {
    background-color: #ccc; /* Color of the scrollbar thumb */
    border-radius: 4px; /* Border radius of the scrollbar thumb */
  }

  .menu::-webkit-scrollbar-thumb:hover {
    background-color: #999; /* Color of the scrollbar thumb on hover */
  }
}
.menu .active a {
  color: green;
  font-weight: bold;
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

a:hover {
  color: #fff; /* Change text color on hover */
  background-color: #f00; /* Change background color on hover */
}

li:first-child a {
  border-top-left-radius: 20px;
  border-bottom-left-radius: 20px;
}

li:last-child a {
  border-top-right-radius: 20px;
  border-bottom-right-radius: 20px;
}

li.active a {
  color: #f00;
}

li.active a:hover {
  color: #fff; /* Change text color on hover for active link */
  background-color: red; /* Change background color on hover for active link */
}

/* Hide the scrollbar on mobile screens */
@media screen and (max-width: 767px) {
  .menu::-webkit-scrollbar {
    display: none;
  }
}


</style>	
	
</head>
<body>

<div class="menu-container">
    <div class="menu">
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
              <li><a href="#">Link 21</a></li>
              <li><a href="#">Link 22</a></li>
              <li><a href="#">Link 23</a></li>
              <li><a href="#">Link 24</a></li>
              <li><a href="#">Link 25</a></li>
              <li><a href="#">Link 26</a></li>
              <li><a href="#">Link 27</a></li>
              <li><a href="#">Link 28</a></li>
              <li><a href="#">Link 29</a></li>
              <li><a href="#">Link 30</a></li>
              <li><a href="#">Link 31</a></li>
              <li><a href="#">Link 32</a></li>
              <li><a href="#">Link 33</a></li>
      </ul>
    </div>
  </div>
	<script>document.addEventListener('DOMContentLoaded', () => {
  let activeLink = document.querySelector('.active');
  let menu = document.querySelector('.menu');
  let activeLinkIndex = Array.from(menu.children).indexOf(activeLink);

  // Scroll the menu element to the left of the active link's position
  menu.scrollTo({
    left: activeLink.offsetLeft - menu.offsetWidth / 0 + activeLink.offsetWidth / 2,
    behavior: 'smooth'
  });
});


document.addEventListener('DOMContentLoaded', function() {
  let menu = document.querySelector('.menu');

  // Hide the scrollbar on mobile screens
  if (window.innerWidth <= 767) {
    menu.style.scrollbarWidth = 'none';  /* Firefox */
    menu.style.msOverflowStyle = 'none';  /* IE and Edge */
  }
});
</script>
</body>
</html>

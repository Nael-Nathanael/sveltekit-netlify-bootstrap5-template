<nav class='navbar navbar-expand-lg navbar-light bg-light'>
	<div class='container-fluid'>
		<a class='navbar-brand' href='#'>Navbar</a>
		<button aria-controls='navbarSupportedContent' aria-expanded='false' aria-label='Toggle navigation' class='navbar-toggler'
						data-bs-target='#navbarSupportedContent' data-bs-toggle='collapse' type='button'>
			<span class='navbar-toggler-icon'></span>
		</button>
		<div class='collapse navbar-collapse' id='navbarSupportedContent'>
			<ul class='navbar-nav me-auto mb-2 mb-lg-0'>
				<li class='nav-item'>
					<a aria-current='page' class='nav-link active' href='#'>Home</a>
				</li>
				<li class='nav-item'>
					<a class='nav-link' href='#'>Link</a>
				</li>
				<li class='nav-item dropdown'>
					<a aria-expanded='false' class='nav-link dropdown-toggle' data-bs-toggle='dropdown' href='#' id='navbarDropdown'
						 role='button'>
						Dropdown
					</a>
					<ul aria-labelledby='navbarDropdown' class='dropdown-menu'>
						<li><a class='dropdown-item' href='#'>Action</a></li>
						<li><a class='dropdown-item' href='#'>Another action</a></li>
						<li>
							<hr class='dropdown-divider'>
						</li>
						<li><a class='dropdown-item' href='#'>Something else here</a></li>
					</ul>
				</li>
				<li class='nav-item'>
					<a aria-disabled='true' class='nav-link disabled' href='#' tabindex='-1'>Disabled</a>
				</li>
			</ul>
			<form class='d-flex'>
				<input aria-label='Search' class='form-control me-2' placeholder='Search' type='search'>
				<button class='btn btn-outline-success' type='submit'>Search</button>
			</form>
		</div>
	</div>
</nav>
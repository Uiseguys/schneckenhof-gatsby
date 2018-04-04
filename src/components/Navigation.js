import React from 'react'

const Navigation  = () => (
  <nav class="main-navigation">
		<ul>
			<li>
				<a href="/">
					<span class="icon-i_logo-05"></span>
					<span class="label">Startseite</span>
				</a>
			</li>

			<li class="active" >
				<a href="/rotweine">
					<span class="icon-i_bottles"></span>
					<span class="label">Shop</span>
				</a>
			</li>


			<li >
				<a href="/weine">
					<span class="icon-i_barrels"></span>
					<span class="label">Wein-Kategorien</span>
				</a>
			</li>

			<li >
				<a >
					<span class="icon-i_news"></span>
					<span class="label">Aktuelles &amp; Termine</span>
				</a>
			</li>

			<li >
				<a href="/gasthaus">
					<span class="icon-i_lamb"></span>
					<span class="label">Gasthaus</span>
				</a>
			</li>

		</ul>
	</nav>
)
export default Navigation
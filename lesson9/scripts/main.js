const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

hambutton.addEventListener('click', () => 
{mainnav.classList.toggle('responsive')}, false);

const datefield = document.querySelector(".date");

datefield.innerHTML = `<em>${getFormattedDate()}</em>`;


document.querySelector(
	"#lastModified"
).textContent = `Last Modification: ${document.lastModified}`;

function getFormattedDate() {
	const now = new Date();
	const weekday = now.toLocaleString('en-US', { weekday: "long" });
	const day = now.toLocaleString('en-US', { day: "numeric" });
	const month = now.toLocaleString('en-US', { month: "long" });
	const year = now.toLocaleString('en-US', { year: "numeric" });
  
	return `${weekday}, ${day} ${month} ${year}`;
}

const now = new Date();
if (now.getDay() == 1 || now.getDay() == 2) {
    const banner = document.querySelector("#banner");
    banner.style.display = "block";
}





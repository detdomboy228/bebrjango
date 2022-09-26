var popup = document.getElementById("popup")
var popup2 = document.getElementById("popup-2")
var line = document.getElementById("line")
var line2 = document.getElementById("line-2")
var info = document.getElementById("info")
var info2 = document.getElementById("info2")
var hobbs = document.getElementById("hobbies")
var hobbs2 = document.getElementById("hobbies2")
var achs = document.getElementById("achives")
var achs2 = document.getElementById("achives2")
var prjct = document.getElementById("projects")
var prjct2 = document.getElementById("projects2")
var trgt = document.getElementById("targets")
var trgt2 = document.getElementById("targets2")
var other = document.getElementById("other")
var other2 = document.getElementById("other2")
var openPopupInfo = document.getElementById("open-popup-1")
var openPopup2 = document.getElementById("open-popup-2")
var openPopup3 = document.getElementById("open-popup-3")
var openPopup4 = document.getElementById("open-popup-4")
var openPopup5 = document.getElementById("open-popup-5")
var openPopup6 = document.getElementById("open-popup-6")
var closePopup = document.getElementById('close-popup-1')
var closePopup2 = document.getElementById('close-popup-2')
openPopupInfo.addEventListener('click', () => {
	popup.style.display = "block"; popup2.style.display = "none";
	hobbs2.style.display = 'none'; achs2.style.display = 'none'; prjct2.style.display = 'none'; trgt2.style.display = 'none'; other2.style.display = 'none';
	info.style.display = 'block'; info2.style.display = 'block';
	hobbs.style.display = 'none'; line2.style.display = 'none';
	achs.style.display = 'none'; prjct.style.display = 'none';
	trgt.style.display = 'none'; other.style.display = 'none';
	line.style.left = '9.15vw'; line2.style.left = '9.15vw';
	line.style.display = 'block';
})
openPopup2.addEventListener('click', () => {
	popup.style.display = "block"; popup2.style.display = "none";
	info2.style.display = 'none'; achs2.style.display = 'none'; prjct2.style.display = 'none'; trgt2.style.display = 'none'; other2.style.display = 'none';
	hobbs.style.display = 'block'; hobbs2.style.display = 'block';
	info.style.display = 'none'; line2.style.display = 'none';
	achs.style.display = 'none'; prjct.style.display = 'none';
	trgt.style.display = 'none'; other.style.display = 'none';
	line.style.left = '20.95vw'; line2.style.left = '20.95vw';
	line.style.display = 'block';
})
openPopup3.addEventListener('click', () => {
	popup.style.display = "block"; popup2.style.display = "none";
	info2.style.display = 'none'; hobbs2.style.display = 'none'; prjct2.style.display = 'none'; trgt2.style.display = 'none'; other2.style.display = 'none';
	achs.style.display = 'block'; achs2.style.display = 'block';
	info.style.display = 'none'; hobbs.style.display = 'none';
	prjct.style.display = 'none'; line2.style.display = 'none';
	trgt.style.display = 'none'; other.style.display = 'none';
	line.style.left = '32.73vw'; line2.style.left = '32.73vw';
	line.style.display = 'block';
})
openPopup4.addEventListener('click', () => {
	popup.style.display = "block"; popup2.style.display = "none";
	info2.style.display = 'none'; hobbs2.style.display = 'none'; achs2.style.display = 'none'; trgt2.style.display = 'none'; other2.style.display = 'none';
	prjct.style.display = 'block'; prjct2.style.display = 'block';
	info.style.display = 'none'; hobbs.style.display = 'none';
	achs.style.display = 'none'; line2.style.display = 'none';
	trgt.style.display = 'none'; other.style.display = 'none';
	line.style.left = '67.25vw'; line2.style.left = '67.25vw';
	line.style.display = 'block';
})
openPopup5.addEventListener('click', () => {
	popup.style.display = "block"; popup2.style.display = "none";
	info2.style.display = 'none'; hobbs2.style.display = 'none'; achs2.style.display = 'none'; prjct2.style.display = 'none'; other2.style.display = 'none';
	trgt.style.display = 'block'; trgt2.style.display = 'block';
	info.style.display = 'none'; hobbs.style.display = 'none';
	achs.style.display = 'none'; prjct.style.display = 'none';
	other.style.display = 'none'; line2.style.display = 'none';
	line.style.left = '79.2vw'; line2.style.left = '79.2vw';
	line.style.display = 'block';
})
openPopup6.addEventListener('click', () => {
	popup.style.display = "block"; popup2.style.display = "none";
	info2.style.display = 'none'; hobbs2.style.display = 'none'; achs2.style.display = 'none'; prjct2.style.display = 'none'; trgt2.style.display = 'none';
	info.style.display = 'none'; hobbs.style.display = 'none';
	achs.style.display = 'none'; prjct.style.display = 'none';
	trgt.style.display = 'none'; line2.style.display = 'none';
	other.style.display = 'block'; other2.style.display = 'block';
	line.style.left = '91vw'; line2.style.left = '91vw';
	line.style.display = 'block';
})
closePopup.addEventListener('click', () => {
	popup.style.display = "none"; popup2.style.display = "block";
	info.style.display = 'none'; hobbs.style.display = 'none';
	achs.style.display = 'none'; prjct.style.display = 'none';
	trgt.style.display = 'none'; other.style.display = 'none';
	line.style.display = 'none'; line2.style.display = 'block';
})

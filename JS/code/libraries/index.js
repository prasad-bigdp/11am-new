/** lirary is a pre written code used for specific purpose */
// $('#btn').click(() =>
// {
//     // $("#myDiv").toggle()
//     // $('#myDiv').text("Hello Everyone")
//     $('#myDiv').slideToggle(2000)
// })
$(".owl-carousel").owlCarousel({
	loop: true,
	margin: 10,
	nav: true,
	autoplay: true,
	responsive: {
		0: {
			items: 1,
		},
		600: {
			items: 3,
		},
		1000: {
			items: 5,
		},
	},
})
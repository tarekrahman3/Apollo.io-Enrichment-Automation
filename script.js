for (var i=1; i<20; i++){
	document.querySelector('#provider-mounter > div > div:nth-child(2) > div:nth-child(2) > div > div.zp_1DSCs > div > div.zp_3Lzj1 > div > div.zp_p7Ra4 > div > div > div > div > div.zp_1ybjt > div > div.zp_1x8SC > div > div > div > div:nth-child(1) > div.zp_3Lc6D > button > div > div').click();
	await new Promise(r => setTimeout(r, 1000));
	let selectAllPerson = document.querySelector("body > div.apolloio-css-vars-reset.zp-overlay > div > div > div > a:nth-child(1)");
	selectAllPerson.click()
	await new Promise(r => setTimeout(r, 1000));
	let unmarkFirstPerson = document.querySelector("#provider-mounter > div > div:nth-child(2) > div:nth-child(2) > div > div.zp_1DSCs > div > div.zp_3Lzj1 > div > div.zp_p7Ra4 > div > div > div > div > div.zp_1ybjt > div > div.zp_p7Ra4 > div > div > div > div > div.zp_32H5Z > div > table > tbody:nth-child(2) > tr > td:nth-child(1) > div.zp_yJfMM > div.zp_D3JmW > label > div > i");
	unmarkFirstPerson.click();
	await new Promise(r => setTimeout(r, 1000));
	document.querySelector("#provider-mounter > div > div:nth-child(2) > div:nth-child(2) > div > div.zp_1DSCs > div > div.zp_3Lzj1 > div > div.zp_p7Ra4 > div > div > div > div > div.zp_1ybjt > div > div.zp_1x8SC > div > div > div > div:nth-child(1) > div.zp_1Gu3n > button.zp-button.zp_1TrB3.zp_Dxi_A.zp_31uFu.zp_2T3rz > i").click();
	await new Promise(r => setTimeout(r, 1000));
	document.querySelector("body > div.apolloio-css-vars-reset.zp-overlay > div > div > div > a:nth-child(2)").click();
	await new Promise(r => setTimeout(r, 2000));
	let enrichEmails = document.querySelector("body > div.apolloio-css-vars-reset.zp.zp-modal.zp_1aV2y > div.zp_2gRpu > div > div > div.zp_2N-K8 > button").click();
	enrichEmails.click();
	// wait for popup
	await new Promise(r => setTimeout(r, 10000));
	let confirmEnrichment = document.querySelector("#provider-mounter > div > div:nth-child(2) > div:nth-child(2) > div > div.zp_1DSCs > div > div.zp_3Lzj1 > div > div.zp_p7Ra4 > div > div > div > div > div.zp_1ybjt > div > div.zp_1x8SC > div > div > div > div:nth-child(1) > div.zp_1Gu3n > button:nth-child(3)");
	confirmEnrichment.click();
	await new Promise(r => setTimeout(r, 1000));
	document.querySelector("body > div.apolloio-css-vars-reset.zp-overlay > div > div > div > a:nth-child(2)").click();
	await new Promise(r => setTimeout(r, 2000));
	document.querySelector("body > div.apolloio-css-vars-reset.zp.zp-modal.zp_1aV2y > div.zp_2gRpu > div > div > div.zp_3wjKN > form > div > div > div > div > div > div:nth-child(2) > label > div").click();
	document.querySelector("body > div.apolloio-css-vars-reset.zp.zp-modal.zp_1aV2y > div.zp_2gRpu > div > div > div.zp_2N-K8 > button").click();
	await new Promise(r => setTimeout(r, 7000));
	console.log('at loop - ',i)
}

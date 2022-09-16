function wait(time) {
	return new Promise(resolve => {
		setTimeout(() => {
			resolve();
		}, time);
	});
}

for (var i = 1; i < 20; i++) {
	document.querySelector(
		'#provider-mounter > div > div:nth-child(2) > div:nth-child(2) > div > div.zp_1DSCs > div > div.zp_3Lzj1 > div > div.zp_p7Ra4 > div > div > div > div > div.zp_1ybjt > div > div.zp_1x8SC > div > div > div > div:nth-child(1) > div.zp_3Lc6D > button > div > div'
	).click();
	await wait(2000);
	console.log(
		'attempting to select all person'
	);
	let selectAllPerson = document
		.querySelector(
			"body > div.apolloio-css-vars-reset.zp-overlay > div > div > div > a:nth-child(1)"
		);
	selectAllPerson.click()
	console.log('selected all person');
	await wait(1000);
	console.log(
		'attempting to unmark first person'
	);
	let unmarkFirstPerson = document
		.querySelector(
			"#provider-mounter > div > div:nth-child(2) > div:nth-child(2) > div > div.zp_1DSCs > div > div.zp_3Lzj1 > div > div.zp_p7Ra4 > div > div > div > div > div.zp_1ybjt > div > div.zp_p7Ra4 > div > div > div > div > div.zp_32H5Z > div > table > tbody:nth-child(2) > tr > td:nth-child(1) > div.zp_yJfMM > div.zp_D3JmW > label > div > i"
		);
	unmarkFirstPerson.click();
	console.log(
		'unmarked first person');
	await wait(1000);
	document.querySelector(
		"#provider-mounter > div > div:nth-child(2) > div:nth-child(2) > div > div.zp_1DSCs > div > div.zp_3Lzj1 > div > div.zp_p7Ra4 > div > div > div > div > div.zp_1ybjt > div > div.zp_1x8SC > div > div > div > div:nth-child(1) > div.zp_1Gu3n > button.zp-button.zp_1TrB3.zp_Dxi_A.zp_31uFu.zp_2T3rz > i"
	).click();
	await wait(1000);
	console.log(
		'attempting to click enrich emails button'
	);
	let enrichEmails = document
		.querySelector(
			"body > div.apolloio-css-vars-reset.zp-overlay > div > div > div > a:nth-child(2)"
		);
	enrichEmails.click();
	console.log(
		'clicked enrich emails button'
	);
	console.log(
		'waiting for enrich email confirmation popup'
	);
	await wait(5000);
	console.log(
		'attempting to click confirm enrich emails'
	);
	let confirmEnrichment = document
		.querySelector(
			"body > div.apolloio-css-vars-reset.zp.zp-modal.zp_1aV2y > div.zp_2gRpu > div > div > div.zp_2N-K8 > button"
		);
	confirmEnrichment.click();
	console.log(
		'clicked confirm enrich emails'
	);
	console.log(
		'waiting for enrichment')
	await wait(10000);
	document.querySelector("#provider-mounter > div > div:nth-child(2) > div:nth-child(2) > div > div.zp_1DSCs > div > div.zp_3Lzj1 > div > div.zp_p7Ra4 > div > div > div > div > div.zp_1ybjt > div > div.zp_1x8SC > div > div > div > div:nth-child(1) > div.zp_1Gu3n > button:nth-child(4) > i.zp-icon.apollo-icon.apollo-icon-caret-down-small.zp_2BRav.zp_35LDu.zp_2_675").click();
	await new Promise(r => setTimeout(r,
		1000));
	document.querySelector(
		"body > div.apolloio-css-vars-reset.zp-overlay > div > div > div > a:nth-child(2)"
	).click();
	await new Promise(r => setTimeout(r,
		2000));
	document.querySelector(
		"body > div.apolloio-css-vars-reset.zp.zp-modal.zp_1aV2y > div.zp_2gRpu > div > div > div.zp_3wjKN > form > div > div > div > div > div > div:nth-child(2) > label > div"
	).click();
	document.querySelector(
		"body > div.apolloio-css-vars-reset.zp.zp-modal.zp_1aV2y > div.zp_2gRpu > div > div > div.zp_2N-K8 > button"
	).click();
	await new Promise(r => setTimeout(r,
		7000));
	console.log('at loop - ', i)
}

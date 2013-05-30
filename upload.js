$(document).ready(function(){
	$('#upload').click(function(){
		doUpload();
	});
});

function doUpload(){
	// buat object iframe dulu
	var iframe;
	try{
		iframe = document.createElement('<iframe name="uploadiframe">');
	}catch(ex){
		iframe = document.createElement('iframe');
		iframe.name = 'uploadiframe';
	}
	iframe.src = 'javascript:false';
	iframe.id = 'uploadiframe';
	iframe.className = 'iframe';
	document.body.appendChild(iframe);
	// redirect form ke iframe
	$('#form').attr('target', 'uploadiframe');
	// tampilkan progress indikator
	$('#uploadform').hide();
	$('#uploadprogress').show();
	// dapatkan hasil upload
	$('#uploadiframe').load(function(){
		$('#uploadprogress').hide();
		$('#uploadform').show();
		// beritahu user apakah upload sukses atau gagal
		var result = $('body', this.contentWindow.document).html();
		if(result == 1)
			$('#result').html('File upload sukses');
		else
			$('#result').html('Terjadi error saat mengupload!');
		// jangan lupa hapus iframe nya
		setTimeout(function(){
			$('#uploadiframe').remove();
		}, 50);
	});
}
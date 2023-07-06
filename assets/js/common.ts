const getPdf = (_url:any,_title:any) => {
  console.log('../pdf/'+_url,_title)
  let file:any = new URL('../pdf/'+_url, import.meta.url).href
  console.log(file)
  fetch(file).then(res => res.blob())
    .then(blob => {
      downloadFile(blob, _title)
    })
    .catch(error => {
        console.log('下载失败')
    })
}

const downloadFile = (blob:any, filename:any) => {
    let url = window.URL.createObjectURL(blob);
    // 创建隐藏的可下载链接
    let link = document.createElement('a');
    link.style.display = 'none';
    link.href = url;
    link.setAttribute('download', filename);
    document.body.appendChild(link);
    link.click();
}

const newGetPdf = (_url:any) => {
  let newUrl:any = new URL('../pdf/'+_url, import.meta.url).href
  return newUrl
}

export {
  getPdf,
  newGetPdf
}
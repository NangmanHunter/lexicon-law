$(`.pre-ㅁ`).each(function(){
    const t=$(this).html();
    console.log(t);
    const t_= t.replace(/ㅁ/g,'<span style="visibility: hidden;">ㅁ</span>');
    $(this).html(t_);
})
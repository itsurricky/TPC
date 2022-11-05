arrText = [
        {
            author: 'Huấn Rose',
            quote: '"Không làm mà muốn có ăn thì chỉ có ăn đầu b*** ăn c*c ."',
        },
        {
            author: 'Khá Bảnh',
            quote: '"Trên đời này không có chuyện đúng sai, chỉ có kẻ mạnh và kẻ yếu, thế thôi."',
        },
        {
            author: 'Tiến Bịp',
            quote: '" Tài 6 3 mà nó còn ra 1 còn xỉu thì 1 4 mà nó còn ra 6, thế nó mới bịp."',
        },
        {
            author: 'Trương Tuấn Tú',
            quote: '"Người không chơi là người không bao giờ thắng, Người thua là người chưa  thắng, Người bỏ cuộc là thất bại, Còn chơi là còn gỡ  ."',
        }
        
    ];
    const footer = document.querySelector('.content-bottom')
    const quotes = document.querySelector('.bottom-textQuote')
    const signature = document.querySelector('.bottom-textSignature')
    footer.addEventListener("click",ranText);
    function ranText(){
        const item = arrText[Math.floor(Math.random()*arrText.length)];
        quotes.innerHTML = item.quote;
        signature.innerHTML = item.author;
        
    }
    console.log(footer);

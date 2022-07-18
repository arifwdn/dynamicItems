const dinaminput = ()=>{
        let wrapperItem = $('#wrapperItem');
        let addItem = $('.add-item');
        let btnRemove = `<button class="remove-item">-</button>`;
        htmlfield = `<div class="items">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus iure nulla voluptatem est modi, exercitationem obcaecati ex magni soluta impedit quas consequuntur a distinctio sapiente ducimus sequi, debitis rerum ipsam!
                 ${btnRemove}
            </div>`;

        let i = 1;
        addItem.click(()=>{
            wrapperItem.append(htmlfield);
            i++;
        });
        wrapperItem.on('click', '.remove-item', function(e){
            e.preventDefault();
            $(this).parent('div').remove();
        });    
    };
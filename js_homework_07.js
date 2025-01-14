const data = [
    { id: 1, name: "John Smith", email: "john.smith@example.com" },
    { id: 2, name: "Emma Johnson", email: "emma.j@example.com" },
    { id: 3, name: "Michael Brown", email: "m.brown@example.com" },
    { id: 4, name: "Sarah Davis", email: "sarah.d@example.com" },
    { id: 5, name: "James Wilson", email: "j.wilson@example.com" },
    { id: 6, name: "Lisa Anderson", email: "l.anderson@example.com" },
    { id: 7, name: "David Taylor", email: "d.taylor@example.com" },
    { id: 8, name: "Emily White", email: "e.white@example.com" },
    { id: 9, name: "Robert Martin", email: "r.martin@example.com" },
    { id: 10, name: "Jennifer Lee", email: "j.lee@example.com" },
    { id: 11, name: "William Clark", email: "w.clark@example.com" },
    { id: 12, name: "Jessica Hall", email: "j.hall@example.com" },
    { id: 13, name: "Daniel King", email: "d.king@example.com" },
    { id: 14, name: "Michelle Scott", email: "m.scott@example.com" },
    { id: 15, name: "Christopher Green", email: "c.green@example.com" },
    { id: 16, name: "Amanda Turner", email: "a.turner@example.com" },
    { id: 17, name: "Kevin Baker", email: "k.baker@example.com" },
    { id: 18, name: "Laura Cooper", email: "l.cooper@example.com" },
    { id: 19, name: "Steven Morris", email: "s.morris@example.com" },
    { id: 20, name: "Rachel Phillips", email: "r.phillips@example.com" },
    { id: 21, name: "Thomas Wright", email: "t.wright@example.com" },
    { id: 22, name: "Sandra Mitchell", email: "s.mitchell@example.com" },
    { id: 23, name: "Joseph Carter", email: "j.carter@example.com" },
    { id: 24, name: "Nancy Evans", email: "n.evans@example.com" },
    { id: 25, name: "George Roberts", email: "g.roberts@example.com" },
    { id: 26, name: "Carol Murphy", email: "c.murphy@example.com" },
    { id: 27, name: "Edward Collins", email: "e.collins@example.com" },
    { id: 28, name: "Ruth Rogers", email: "r.rogers@example.com" },
    { id: 29, name: "Donald Cook", email: "d.cook@example.com" },
    { id: 30, name: "Sharon Morgan", email: "s.morgan@example.com" },
    { id: 31, name: "Kenneth Bell", email: "k.bell@example.com" },
    { id: 32, name: "Betty Foster", email: "b.foster@example.com" },
    { id: 33, name: "Ronald Ward", email: "r.ward@example.com" },
    { id: 34, name: "Helen Brooks", email: "h.brooks@example.com" },
    { id: 35, name: "Mark Price", email: "m.price@example.com" },
    { id: 36, name: "Donna Long", email: "d.long@example.com" },
    { id: 37, name: "Paul Hughes", email: "p.hughes@example.com" },
    { id: 38, name: "Margaret Butler", email: "m.butler@example.com" },
    { id: 39, name: "Jerry Russell", email: "j.russell@example.com" },
    { id: 40, name: "Joyce Gray", email: "j.gray@example.com" },
    { id: 41, name: "Roger Fisher", email: "r.fisher@example.com" },
    { id: 42, name: "Gloria Howard", email: "g.howard@example.com" },
    { id: 43, name: "Ralph West", email: "r.west@example.com" },
    { id: 44, name: "Teresa Barnes", email: "t.barnes@example.com" },
    { id: 45, name: "Bruce Kelly", email: "b.kelly@example.com" },
    { id: 46, name: "Louise Sanders", email: "l.sanders@example.com" },
    { id: 47, name: "Alan Ross", email: "a.ross@example.com" },
    { id: 48, name: "Phyllis Wood", email: "p.wood@example.com" }
  ];

const displayCount = 5; // 每頁5筆
const totalPages = Math.ceil(data.length / displayCount);
let currentPage = 1;
const displayPages = document.getElementById('displayPagination');
const prevPage = document.querySelector('.previous-page');
const nextPage = document.querySelector('.next-page');
const firstPage = document.querySelector('.first-page');
const lastPage = document.querySelector('.last-page');
renderData(currentPage);
displayPagination(currentPage, totalPages);

displayPages.addEventListener('click', (e) => {
    const button = e.target.closest('.btn.page');
    if (button){
        const pageValue = Number(button.dataset.pagenum);
        if (!isNaN(pageValue)){
            currentPage = pageValue;
            renderData(currentPage);
            displayPagination(currentPage, totalPages)    
        }
    }
    
})



prevPage.addEventListener('click', (e) => {
    const button = document.querySelector('.selected');
    if (button){
        let pageValue = Number(button.dataset.pagenum);
        if (!isNaN(pageValue)){
            if (pageValue !== 1 ){
                let currentPage = pageValue - 1;
                renderData(currentPage);
                displayPagination(currentPage, totalPages);        
            }
        }
    }
})
nextPage.addEventListener('click', (e) => {
    const button = document.querySelector('.selected');
    if (button){
        let pageValue = Number(button.dataset.pagenum);
        if (!isNaN(pageValue)){
            if (pageValue !== totalPages){
                let currentPage = pageValue + 1;
                renderData(currentPage);
                displayPagination(currentPage, totalPages);        
            }
        }
    }
})
firstPage.addEventListener('click', (e) => {
    const button = document.querySelector('.selected');
    if (button){
        let pageValue = Number(button.dataset.pagenum);
        if (!isNaN(pageValue)){
            if (pageValue !== 1){
                let currentPage = 1;
                renderData(currentPage);
                displayPagination(currentPage, totalPages);        
            } 
        }
    }
})
lastPage.addEventListener('click', (e) => {
    const button = document.querySelector('.selected');
    if (button){
        let pageValue = Number(button.dataset.pagenum);
        if (!isNaN(pageValue)){
            if (pageValue !== totalPages){
                let currentPage = totalPages;
                renderData(currentPage);
                displayPagination(currentPage, totalPages);        
            }
        }
    }
})


//   render data
function renderData(currentPage){
    const displayBoard = document.getElementById('displayBoard');
    let html = '';
    let start = ((currentPage - 1) * displayCount);
    let end = (Number(currentPage) == totalPages)? (data.length - 1) :(currentPage * displayCount - 1);
    for (let i = start; i <= end; i++){
        html += `
            <tr> 
                <th>${data[i].id}</th>
                <td>${data[i].name}</td>
                <td>${data[i].email}</td>
            </tr>
        `;
    }
    displayBoard.innerHTML = html;
}

//pagination顯示
function displayPagination(currentPage, totalPages){
    const pagination = generatePagination(currentPage, totalPages);
    let pageHtml = '';
    pagination.forEach(item => {
        if (item == currentPage){
            pageHtml += `
                <button class="btn page selected" data-pagenum=${item}>
                    <span>${item}</span>
                </button>
            `;
        } else if(item !== '...'){
            pageHtml += `
                <button class="btn page" data-pagenum=${item}>
                    <span>${item}</span>
                </button>
            `;
        }else {
            pageHtml += `
                <button class="btn page">
                    <span>${item}</span>
                </button>
            `;
        }  
    })
    displayPages.innerHTML = pageHtml;
    const button = document.querySelector('.selected');
    let pageValue = Number(button.dataset.pagenum);
    if (!isNaN(pageValue)){
        firstPage.classList.toggle('disable', pageValue == 1);
        prevPage.classList.toggle('disable', pageValue == 1);
        lastPage.classList.toggle('disable', pageValue == totalPages);
        nextPage.classList.toggle('disable', pageValue == totalPages);
    }

}


function generatePagination (currentPage, totalPages){
    let pagination = [];
    //只有一頁的處理
    if (totalPages <= 1){
        pagination.push(1);
    }
    //當前頁頁碼 < 5(前5頁)
    // 1 2 3 4 5 ... 10
    if (currentPage <= 5) {
        for (let i = 1; i <= 5; i ++){
            pagination.push(i);
        }
        if (totalPages > 5){
            pagination.push('...');
            pagination.push(totalPages);
        }
    //當前頁碼差總頁數<5(後5頁)
    } else if ((totalPages - currentPage) < 5){
        pagination.push(1);
        pagination.push('...');
        for (let i = (totalPages - 5); i <= totalPages; i++){
            pagination.push(i);
        }
        
     //當前頁碼不在前5頁、後5頁
    // 1 ... 4 5 6 ... 10
    } else {
        pagination.push(1);
        pagination.push('...');
        for (let i = (currentPage - 1); i < (currentPage + 2); i++){
            pagination.push(i);
        }
        pagination.push('...');
        pagination.push(totalPages);
    }
    return pagination;
}



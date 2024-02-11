//Главное меню
let navList=document.querySelector(".nav-list");
let navListItems=document.querySelectorAll(".nav-list-item");


//Субменю общий
let subMenu=document.querySelector(".submenu");
let subMenus=document.querySelectorAll(".submenu");
//СубМеню компания
let m_Company=document.querySelector(".m_company");

let m_CompanyMenuItems=document.querySelectorAll(".m_company_item");
let m_Hover=m_Company;
//СубМеню каталог
let m_Catalog=document.querySelector(".m_catalog")
let m_CatalogMenuItems=document.querySelectorAll(".m_catalog_item");

//Видимое субменю
let m_visible=m_Company;

//Body
let Body=document.querySelector("body");


var FirstVisible=0,
    FirstVisibleItem=0;


//Сервис
let serviceListItems = document.querySelectorAll('.service-list-item');
let serviceImg=document.querySelector('#service-img');

//Footer
let m_mainFooterListItems=document.querySelectorAll(".main-footer-sublist-item");



//Ховеры и ауты мыши главного меню
/*for(let navListItem of navListItems)
{
        //обрабатываем  ховеры мыши
        navListItem.onmouseover=function(){
          navListItem.classList.add('under_line_color')
        }
        //обрабатываем  ауты мыши
        navListItem.onmouseout=function(){
          navListItem.classList.remove('under_line_color')
        }

}
*/


//Клики главного меню
for(let navListItem of navListItems)    
{
    navListItem.onclick=function()
    {
        //скрыть видимое субменю
        

        if(navListItem.textContent=="Компания")
        {
                //показать субменю компания
                if (m_Company.classList.contains('visible')==false)
                {
                    //скрыть другое видимое субменю
                    m_visible.classList.remove('visible');
                    m_Company.classList.add('visible');
                    m_visible=m_Company;
                }
                else
                //скрыть видимое субменю компания
                    m_Company.classList.remove('visible');
        }
        else
        if(navListItem.textContent=="Каталог")
        {
            
                //показать субменю каталог
                if (m_Catalog.classList.contains('visible')==false)
                {
                    //скрыть другое видимое субменю
                    m_visible.classList.remove('visible');
                    m_Catalog.classList.add('visible');
                    m_visible=m_Catalog;
                }
                else
                //скрыть видимое субменю каталог
                m_Catalog.classList.remove('visible');
            
        }
        if(navListItem.textContent=="Услуги")
        {
            m_visible.classList.remove('visible');
        }
        if(navListItem.textContent=="Информация")
        {
            m_visible.classList.remove('visible');
        }
        if(navListItem.textContent=="Контакты")
        {
            m_visible.classList.remove('visible');
        }
    }
 }
 

//Hide the menus if visible
/*document.onclick = function (e) {
     if ((e.target.className != "submenu")&&(e.target.className != "nav-list")&&(e.target.className != "nav-list-item")) 
     {
            
            m_visible.classList.remove('visible');
     };
}
*/

//Ховеры субменю компания
/*    m_visible.onmouseover=function()
    {
        FirstVisible=1;
    }

    m_visible.onmouseout=function()
    {
        if(FirstVisible==1||FirstVisibleItem==0)
        {
            m_visible.classList.remove('visible');
            FirstVisible=0;
        }
    }
*/

    for(let m_CompanyMenuItem of m_CompanyMenuItems)
    {
      
      m_CompanyMenuItem.onmouseover=function()
      {
//убрать подчеркивание выделенного меню, подчеркнуть новое меню
        m_Hover.classList.remove('m_active');
        m_CompanyMenuItem.classList.add('m_active');
        m_Hover=m_CompanyMenuItem;
      }
     }
//Ховеры субменю каталог
    for(let m_CatalogMenuItem of m_CatalogMenuItems)
    {
     m_CatalogMenuItem.onmouseover=function()
     {
//убрать подчеркивание выделенного меню, подчеркнуть новое меню
        m_Hover.classList.remove('m_active');
        m_CatalogMenuItem.classList.add('m_active');
        m_Hover=m_CatalogMenuItem;
        
     }
   }
   
//Изменение изображения сотрудника сервиса
//Сервис

function setOpacity(xxId) {
    var el = xxId;
    var op = 0;
    setTimeout(function func() {
        if (op > 1)
            return;
        el.style.opacity = op;
        op += 0.1;
        setTimeout (func, 30);
    }, 30);    
}

/*Меняем изображения в меню Услуги*/ 
for (let serviceListItem of serviceListItems)
{
    serviceListItem.onmouseover=function()
    {
            if(serviceListItem.classList.contains('cons'))
            {   
                serviceImg.style.backgroundImage="url('img/mech.png')"
                
            }
            else
            if(serviceListItem.classList.contains('change_akb'))
                serviceImg.style.backgroundImage="url('img/zamena_akb.png')"
            else
            if(serviceListItem.classList.contains('diag_akb'))
                serviceImg.style.backgroundImage="url('img/diagnostika_akb.png')"
            

    }
    
}

/*Подчеркивания в футере*/ 






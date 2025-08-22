/*const toggleTheme = document.getElementById("toggleTheme");

const rootHtml = document.documentElement
const accordionHeaders = document.querySelectorAll(".accordion__header");
const menuLinks = document.querySelectorAll(".menu__link");

function changeTheme(){
  const currentTheme = rootHtml.getAttribute("data-theme");

  currentTheme === "dark" ? rootHtml.setAttribute("data-theme", "light") : rootHtml.setAttribute("data-theme", "dark")

  toggleTheme.classList.toggle("bi-sun")
  toggleTheme.classList.toggle("bi-moon-stars")
}

toggleTheme.addEventListener("click", changeTheme);



accordionHeaders.forEach(header => {
  header.addEventListener("click", () => {
    const accordionItem = header.parentElement;
    const accordionActive = accordionItem.classList.contains("active");

    accordionActive ? accordionItem.classList.remove("active") : accordionItem.classList.add("active");
  })
})

menuLinks.forEach(item => {
  item.addEventListener("click", () => {
    menuLinks.forEach(i => i.classList.remove("active"));
    item.classList.add("active");
  })
})

//mouse 
const cursor = document.querySelector('.custom-cursor');

// Movimento do cursor
document.addEventListener('mousemove', e => {
  cursor.style.top = `${e.clientY}px`;
  cursor.style.left = `${e.clientX}px`;
});

// Elementos que ativam o efeito
const hoverTargets = document.querySelectorAll('*');

hoverTargets.forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.classList.add('cursor-hover');
  });

  el.addEventListener('mouseleave', () => {
    cursor.classList.remove('cursor-hover');
  });
});
*/

const toggleTheme = document.getElementById("toggleTheme");
const rootHtml = document.documentElement;
const accordionHeaders = document.querySelectorAll(".accordion__header");
const menuLinks = document.querySelectorAll(".menu__link");

// 1. Função para salvar o tema no localStorage
function saveTheme(theme) {
  localStorage.setItem('theme', theme);
}

// 2. Função para carregar o tema do localStorage
function loadTheme() {
  const savedTheme = localStorage.getItem('theme');
  // Se houver um tema salvo, aplica-o e ajusta o ícone
  if (savedTheme) {
    rootHtml.setAttribute("data-theme", savedTheme);
    if (savedTheme === "light") {
      toggleTheme.classList.add("bi-moon-stars");
      toggleTheme.classList.remove("bi-sun");
    } else {
      toggleTheme.classList.add("bi-sun");
      toggleTheme.classList.remove("bi-moon-stars");
    }
  } else {
    // Caso não haja tema salvo, define o padrão (dark) e salva
    rootHtml.setAttribute("data-theme", "dark");
    saveTheme("dark");
  }
}

function changeTheme() {
  const currentTheme = rootHtml.getAttribute("data-theme");
  const newTheme = currentTheme === "dark" ? "light" : "dark";

  rootHtml.setAttribute("data-theme", newTheme);
  toggleTheme.classList.toggle("bi-sun");
  toggleTheme.classList.toggle("bi-moon-stars");

  // Salva o novo tema no localStorage
  saveTheme(newTheme);
}

// Event Listeners

// Carrega o tema quando a página é carregada
document.addEventListener("DOMContentLoaded", loadTheme);

toggleTheme.addEventListener("click", changeTheme);

accordionHeaders.forEach(header => {
  header.addEventListener("click", () => {
    const accordionItem = header.parentElement;
    const accordionActive = accordionItem.classList.contains("active");

    accordionActive ? accordionItem.classList.remove("active") : accordionItem.classList.add("active");
  });
});

menuLinks.forEach(item => {
  item.addEventListener("click", () => {
    menuLinks.forEach(i => i.classList.remove("active"));
    item.classList.add("active");
  });
});

// Cursor
const cursor = document.querySelector('.custom-cursor');
document.addEventListener('mousemove', e => {
  cursor.style.top = `${e.clientY}px`;
  cursor.style.left = `${e.clientX}px`;
});

const hoverTargets = document.querySelectorAll('*');
hoverTargets.forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.classList.add('cursor-hover');
  });

  el.addEventListener('mouseleave', () => {
    cursor.classList.remove('cursor-hover');
  });
});
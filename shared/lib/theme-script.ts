export const themeScript =
  "(function(){var d=false;try{var v=localStorage.getItem('thamires-theme-v1');d=v==='dark'||(v!=='light'&&matchMedia('(prefers-color-scheme: dark)').matches)}catch(e){d=matchMedia('(prefers-color-scheme: dark)').matches}document.documentElement.classList.toggle('dark',d)})()";

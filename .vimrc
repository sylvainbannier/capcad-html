" use this if you don't use editor config plugin. see .editorconfig
" set tabstop=4     " tabs are at proper location
" set noexpandtab   " use tabs
" set shiftwidth=4  " indenting is 4 spaces (even if its tabs)

set autoindent
set smartindent

" ignore directories in vimgrep ack CtrlP etc.
set wildignore+=bower_components,node_modules,dist,.git,coverage

let g:NERDTreeIgnore=['bower_components', 'node_modules', 'dist', '.git', 'coverage']


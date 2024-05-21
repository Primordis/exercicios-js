// fechar a página, voltar e mostrar sua localização.

const voltarPagina = () => {
    window.history.back()
}

const fecharPagina = () => {
    window.close()
}

const rastrearCoords = () => {
    navigator.geolocation.getCurrentPosition()
}

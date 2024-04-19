const model = `
{
  "username":"X",
  "value":""
}
`

const modelBuilder = () => {
  const m = JSON.parse(model)
  m.value = 10 * Math.random()
  return m;
}

const build = () => {
  return new Array(100000).fill( 0 ).map(modelBuilder )
}

postMessage({ action:'LOG', value:'WORKER LOADED'})

onmessage = message => {
    if(message.data.action==='BUILD'){
        const collection = build();
        postMessage({ action:'LOG', value:collection})
    }
}

#Snippets CSS for Media Queries
[![Build Status](https://travis-ci.org/leonardo403/media-queries-devices.svg)](https://travis-ci.org/leonardo403/media-queries-devices)

Esse projeto contém snippets que irão auxiliar no desenvolvimento de sites terão acesso de diversos dispositivos.

Abaixo alguns exemplos:

###Iphone 4 and 4S

```
/* ----------- iPhone 4 e 4S ----------- */
/* Retrato and Paisagem */
@media only screen
  and (min-device-width: 320px)
  and (max-device-width: 480px)
  and (-webkit-min-device-pixel-ratio: 2) {
    /*Seu código aqui*/
 }
```

###Galaxy S3

```
/* ----------- Galaxy S3 ----------- */
/* Retrato e Paisagem */
@media screen
  and (device-width: 320px)
  and (device-height: 640px)
  and (-webkit-device-pixel-ratio: 2) {
    /*Seu código aqui*/
}
```

###Como utilizar

Chame o arquivo CSS no ínicio do seu site ou use no desenvolvimento de estilos.

Procure um exemplo a seguir:

**Exemplo 1**:

```
<link rel="stylesheet" href="path/site/media-queries-devices.css">
```

**Exemplo 2**:

```
@import url("path/media-queries-devices.css");
```

###Mobile Verificação

[Mobile Checker](https://validator.w3.org/mobile-alpha/?utm_source=html5weekly&utm_medium=email)

###Referências

[CSS Tricks](https://css-tricks.com/snippets/css/media-queries-for-standard-devices/)

[CSS Media Queries](http://cssmediaqueries.com/)

Aqui uma opinião diferente sobre utilizar pontos de quebra:

[Why you dont need device specific breakpoints](http://responsivedesign.is/articles/why-you-dont-need-device-specific-breakpoints)

###Como Contribuir
1. Fork o projeto.
2. Crie sua branch: `git checkout -b minha-nova-branch`
3. Envie suas modificações: `git commit -m 'Adicionando recurso'`
4. Adicione suas alteraçoes a branch: `git push origin minha-nova-branch`
5. Colabore com um pull request.

###Exemplo Estrutura Snippet

```
'source Arquivo':
    'nome snippet':
        'prefix': 'prefixo snippet'
        'body': """
            código
        """
```

###Padrões


###Licença
 **MIT**

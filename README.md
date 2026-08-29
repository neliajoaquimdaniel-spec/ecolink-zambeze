# EcoLink Zambeze — Portal Offline Multi-Nível

Portal web responsivo baseado no projecto **Sistema Inteligente de Gestão de Resíduos Sólidos, Reciclagem e Inclusão Social para a Cidade de Quelimane**.

## Níveis de acesso
1. **Munícipe** — reportar lixo com câmara/galeria, localização, solicitar recolha, consultar histórico, pontos e conversão para M-Pesa/e-Mola (simulada).
2. **Reciclador** — visualizar pedidos, aceitar/iniciar recolhas e marcar recolhas concluídas.
3. **Administrador** — dashboard, utilizadores, recicladores, solicitações, recolhas, pontos, relatórios e configurações; pode atribuir pedidos a recicladores.

## Modo sem servidor/base de dados
Os dados são guardados no `localStorage` do navegador. As fotografias são comprimidas no dispositivo antes de serem guardadas. Assim a demonstração funciona sem MySQL, API ou servidor de base de dados.

## Acesso de demonstração
- Munícipe: seleccionar **Munícipe** — palavra-passe `12345678`
- Reciclador: seleccionar **Reciclador** — palavra-passe `12345678`
- Administrador: seleccionar **Administrador** — palavra-passe `12345678`

Os telefones de demonstração são preenchidos automaticamente e podem ser alterados.

## Câmara e localização
A câmara e geolocalização dependem das permissões do navegador. Em telemóvel, recomenda-se HTTPS ou localhost. A selecção de ficheiros funciona também em computador.

## Offline/PWA
O projecto inclui `manifest.json` e `sw.js`. Em localhost/HTTPS o service worker permite carregar a interface sem internet depois da primeira visita.

## Pontos
A proposta-base define pontos por actividade (por exemplo, reporte válido 10 pontos, plástico 15, papel 10, vidro 15, metal 20, campanha 30 e limpeza 50). Nesta PoC, um reporte com fotografia atribui 10 pontos. A conversão de demonstração é 100 pontos = 5,00 MT. O pagamento M-Pesa/e-Mola é apenas simulado até existir integração oficial com APIs.

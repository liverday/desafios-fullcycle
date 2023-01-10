# Desafio NodeJS + Nginx + MySQL - FullCycle

Como executar as imagens usando docker-compose:

```
docker-compose up -d
```

Criando novos nomes:

```
curl -X POST http://localhost:8080/people -H 'Content-Type: application/json' -d '{ "name": "Vitor" }'
```

Você pode ver a lista de nomes e o resultado desse desafio em `http://localhost:8080`

OBS: Tive que adicionar o platform no `docker-compose.yml` do mysql para conseguir executar a imagem no Mac com M1.
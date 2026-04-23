---
tipo: teste-ab
campanha_origem: ""
variavel_testada: hook
variacao_a: ""
variacao_b: ""
metrica_decisiva: CPA
amostra_alvo: 1000
data_inicio: <% tp.date.now("YYYY-MM-DD") %>
data_fim: ""
resultado: ""
vencedor: ""
tags: [ab-test]
---

# 🧪 Teste A/B — <% tp.file.title %>

> 📣 **Campanha origem:** [[]]
> 🎯 **Variável testada:** hook / body / cta / audience / creative / landing

## 🧠 Hipótese

> Se eu mudar [variável] de **A** pra **B**, espero [métrica] melhorar porque [razão].

**Hipótese:**

## ⚗️ Setup

| Item | Variação A (controle) | Variação B (teste) |
|---|---|---|
| Texto / imagem | [preencher] | [preencher] |
| Audience | [igual / diferente] | [igual / diferente] |
| Budget diário | R$ | R$ |
| Duração planejada | [dias] | [dias] |

### Variação A — Controle
```
[copy/criativo completo]
```

### Variação B — Teste
```
[copy/criativo completo]
```

## 📊 Critérios de vitória

- **Métrica decisiva:** CPA (editar se for outra)
- **Diferença mínima relevante:** 20%
- **Amostra alvo:** 1000 impressões (ou 20 conversões) por variação
- **Significância exigida:** eyeball (low data) / estatística (alto volume)

## 📈 Resultado

> Preencher após o teste.

| Métrica | A | B | Δ |
|---|---|---|---|
| CPA | R$ | R$ | % |
| CTR | % | % | |
| Conversões | | | |
| ROAS | | | |

**Vencedor:** A / B / inconclusivo

## 🧠 Learning

> O que aprendi com esse teste? O que mantém pra próxima campanha?

**Insight:**
**Próximo teste:**

## ⚡ Decisão

- [ ] Pausar variação perdedora
- [ ] Escalar variação vencedora (dobrar budget)
- [ ] Criar derivações da vencedora pra próximo teste
- [ ] Atualizar [[DASHBOARD-ads-performance]] com learning

## 🧠 Skills usadas

- `claude-ads` (ads-score, ads-audit) · `ad-creative` · `marketing-psychology`

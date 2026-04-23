# 📦 ARQUIVO — pgsa/

> Pasta de arquivos DESATIVOS preservados pra histórico/referência.
> Nada aqui é ativo no dia-a-dia. NÃO apagar — git preserva o histórico mas isso facilita consulta.

---

## 🗂️ Conteúdo arquivado

### 2026-04-23 — Consolidação Opção E

**Motivo da consolidação**: múltiplas estratégias concorrentes acumularam durante iterações. Opção E Híbrida (em `pgsa/ESTRATEGIA-VENCEDORA-GOSPEL.md`) é a ATIVA desde 2026-04-22. As demais ficam como histórico.

Ver pasta [2026-04-23/](2026-04-23/) pra arquivos movidos nessa data.

**Arquivos movidos:**
- `ESTRATEGIA-VENCEDORA.md` — iteração original H27 (antes do pivot)
- `ESTRATEGIA-VENCEDORA-AI-ONLY.md` — variante AI-voice (descartada por risco policy)
- `ESTRATEGIA-VENCEDORA-SEM-ISCA.md` — variante sem ebook (descartada)
- `CALENDARIO-EDITORIAL-12SEMANAS.md` — calendário do H27 (substituído por OPCAO-E-MAI-DEZ)

**Quando consultar:**
- Comparar evolução de estratégia (se alguém pergunta "por que Opção E?")
- Recuperar fallback caso Opção E falhe (kill switch pra H27 documentado)
- Referência histórica de iterações do strategist-autonomous

---

## 🔍 Como achar algo arquivado

1. Ver pastas por data (`2026-04-23/`, futuras)
2. Git log dos arquivos: `git log --follow pgsa/_arquivo/2026-04-23/<arquivo>.md`
3. Branch master preserva todo histórico antes do arquivamento

---

## ♻️ Política de arquivamento

**Quando arquivar um arquivo de `pgsa/`:**
- Estratégia foi substituída por outra aprovada
- Calendário foi superado
- Iteração é só histórico (não operacional)
- Conteúdo redundante com ATIVO

**Quando NÃO arquivar:**
- Arquivo ainda é referenciado no dia-a-dia
- Tem informação única não replicada
- É operacional (checklist, template, pipeline)

**Processo**: criar pasta `pgsa/_arquivo/YYYY-MM-DD/` + mover arquivos + atualizar este README.

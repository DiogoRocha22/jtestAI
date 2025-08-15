# 🚀 JTest AI - Gerador Inteligente de Testes Jest

<div align="center">

![JTest AI Logo](https://img.shields.io/badge/JTest-AI%20Powered-blue?style=for-the-badge&logo=jest&color=yellow)
![Next.js](https://img.shields.io/badge/Next.js-15.4.6-black?style=for-the-badge&logo=next.js)
![React](https://img.shields.io/badge/React-19.1.0-blue?style=for-the-badge&logo=react)
![TypeScript](https://img.shields.io/badge/TypeScript-5.0-blue?style=for-the-badge&logo=typescript)

**Transforme seu código em testes Jest profissionais com inteligência artificial**

[Demo](#) • [Documentação](#) • [Reportar Bug](#) • [Solicitar Feature](#)

</div>

---

## 📖 Sobre o Projeto

O **JTest AI** é uma aplicação web inteligente que utiliza IA para gerar automaticamente testes unitários Jest baseados no código JavaScript/TypeScript fornecido. Desenvolvido com foco na experiência do desenvolvedor, oferece uma interface intuitiva similar ao ChatGPT para criação rápida e eficiente de testes.

### ✨ Principais Funcionalidades

- 🤖 **IA Inteligente**: Geração automática de testes Jest baseada em análise de código
- 💻 **Interface Moderna**: Design inspirado no ChatGPT/Claude com UX otimizada para código
- 📝 **Editor de Código**: Área dedicada para colar código com syntax highlighting
- 🧪 **Testes Estruturados**: Geração de testes Jest organizados e comentados
- 📋 **Cópia Fácil**: Botão para copiar testes gerados com um clique
- 🔐 **Sistema de Autenticação**: Login/signup com persistência local
- 📱 **Responsivo**: Funciona perfeitamente em desktop e mobile
- 🎨 **Tema Personalizado**: Design dark com acentos amarelos/laranjas

## 🛠️ Tecnologias Utilizadas

### Frontend
- **[Next.js 15.4.6](https://nextjs.org/)** - Framework React com App Router
- **[React 19.1.0](https://react.dev/)** - Biblioteca para interfaces de usuário
- **[TypeScript 5.0](https://www.typescriptlang.org/)** - Tipagem estática para JavaScript
- **[Tailwind CSS 4](https://tailwindcss.com/)** - Framework CSS utility-first

### Estado e Gerenciamento
- **[Zustand 5.0.7](https://zustand-demo.pmnd.rs/)** - Gerenciamento de estado simples e eficiente
- **[clsx](https://github.com/lukeed/clsx)** - Utilitário para combinação de classes CSS
- **[tailwind-merge](https://github.com/dcastil/tailwind-merge)** - Merge inteligente de classes Tailwind

### UI/UX
- **[react-icons](https://react-icons.github.io/react-icons/)** - Biblioteca de ícones SVG
- **Componentes Polimórficos** - Sistema flexível de componentes reutilizáveis
- **Design System** - Componentes UI consistentes e acessíveis

## 🚀 Como Executar

### Pré-requisitos

- **Node.js** 18.17 ou superior
- **npm** ou **yarn** ou **pnpm**

### Instalação

1. **Clone o repositório**
   ```bash
   git clone https://github.com/seu-usuario/test-generator.git
   cd test-generator
   ```

2. **Instale as dependências**
   ```bash
   npm install
   # ou
   yarn install
   # ou
   pnpm install
   ```

3. **Execute em modo de desenvolvimento**
   ```bash
   npm run dev
   # ou
   yarn dev
   # ou
   pnpm dev
   ```

4. **Acesse a aplicação**
   ```
   http://localhost:3000
   ```

### Scripts Disponíveis

```bash
npm run dev      # Inicia servidor de desenvolvimento
npm run build    # Constrói para produção
npm run start    # Inicia servidor de produção
npm run lint     # Executa linter ESLint
```

## 📁 Estrutura do Projeto

```
test-generator/
├── app/                    # App Router do Next.js
│   ├── chat/              # Página do chat AI
│   ├── globals.css        # Estilos globais
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Página inicial
├── components/             # Componentes React
│   ├── AI/                # Componentes relacionados à IA
│   ├── layout/            # Componentes de layout
│   ├── ui/                # Componentes de interface
│   └── user/              # Componentes de usuário
├── lib/                    # Utilitários e helpers
├── stores/                 # Stores Zustand
├── @types/                 # Definições de tipos TypeScript
├── public/                 # Arquivos estáticos
└── package.json            # Dependências e scripts
```

## 🎯 Como Usar

### 1. **Acesse a Aplicação**
   - Navegue para a página inicial
   - Clique em "Começar Agora" para acessar o chat

### 2. **Faça Login (Opcional)**
   - Clique em "Login" no header
   - Crie uma conta ou faça login existente
   - Suas conversas serão salvas localmente

### 3. **Cole seu Código**
   - Na área de texto, cole seu código JavaScript/TypeScript
   - Certifique-se de que o código esteja bem formatado
   - O sistema aceita até 2000 caracteres

### 4. **Gere os Testes**
   - Clique em "🚀 Gerar Testes Jest"
   - Aguarde a IA analisar e gerar os testes
   - Os testes serão exibidos com formatação adequada

### 5. **Copie e Use**
   - Clique em "📋 Copiar" para copiar os testes
   - Cole em seu arquivo de teste
   - Execute com `npm test`
   - Personalize conforme necessário

## 🔧 Configuração

### Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto:

```env
# Configurações da aplicação
NEXT_PUBLIC_APP_NAME=JTest AI
NEXT_PUBLIC_APP_VERSION=0.1.0

# Configurações de IA (futuro)
# NEXT_PUBLIC_AI_API_KEY=sua_chave_api
# NEXT_PUBLIC_AI_ENDPOINT=https://api.openai.com/v1
```

### Personalização de Temas

O projeto utiliza Tailwind CSS com um sistema de design customizado. Para personalizar cores e estilos, edite:

- `app/globals.css` - Variáveis CSS globais
- `tailwind.config.js` - Configuração do Tailwind
- Componentes individuais para estilos específicos

## 🧪 Funcionalidades da IA

### Geração de Testes
- **Análise de Código**: Compreensão da estrutura e lógica
- **Testes Estruturados**: Organização em `describe` e `test` blocks
- **Casos de Teste**: Cobertura de cenários normais e edge cases
- **Comentários**: Explicações e dicas para personalização

### Tipos de Testes Gerados
- ✅ **Testes Básicos**: Verificação de execução e comportamento
- 🔍 **Testes de Funcionalidade**: Validação de outputs esperados
- 🚨 **Testes de Edge Cases**: Tratamento de inputs inválidos
- 📊 **Testes de Performance**: Verificação de limites e timeouts

## 🤝 Contribuindo

Contribuições são sempre bem-vindas! Aqui estão algumas formas de contribuir:

### 🐛 Reportar Bugs
- Use as [Issues](https://github.com/seu-usuario/test-generator/issues) do GitHub
- Descreva o problema detalhadamente
- Inclua passos para reproduzir

### 💡 Sugerir Features
- Abra uma [Issue](https://github.com/seu-usuario/test-generator/issues) com label "enhancement"
- Descreva a funcionalidade desejada
- Explique o benefício para os usuários

### 🔧 Pull Requests
1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

### 📋 Padrões de Código
- Use TypeScript para todo novo código
- Siga as convenções de nomenclatura existentes
- Adicione testes para novas funcionalidades
- Mantenha a consistência com o design system

## 🚧 Roadmap

### Versão 1.0 (Atual)
- ✅ Interface de chat com IA
- ✅ Sistema de autenticação (sem authenticação real)
- ✅ Design responsivo

### Versão 1.1 (Próxima)
- 🔄 Integração com APIs de IA reais
- 🔄 Histórico de conversas persistente
- 🔄 Exportação de testes em diferentes formatos
- 🔄 Templates de teste customizáveis

### Versão 2.0 (Futuro)
- 🔮 Análise de código em tempo real
- 🔮 Sugestões de melhorias no código
- 🔮 Integração com IDEs populares
- 🔮 Colaboração em tempo real

## 📄 Licença

Este projeto está licenciado sob a Licença MIT - veja o arquivo [LICENSE](LICENSE) para detalhes.

## 🙏 Agradecimentos

- **Next.js Team** - Framework incrível
- **React Team** - Biblioteca fundamental
- **Tailwind CSS** - Sistema de design
- **Zustand** - Gerenciamento de estado
- **Comunidade Open Source** - Inspiração e suporte

## 📞 Contato

- **GitHub**: [@DiogoRocha22](https://github.com/DiogoRocha22)
- **Email**: diogotechdev@gmail.com
- **LinkedIn**: [Diogo Rocha](https://www.linkedin.com/in/diogo-rocha-frontend-dev/)

---

<div align="center">

**⭐ Se este projeto te ajudou, considere dar uma estrela! ⭐**

</div>

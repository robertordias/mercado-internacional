export default {
    translations: { 
      title: 'Mercado Internacional',
      login:{
        title: 'Olá, Bem vindo de volta!',
        signUpTitle: 'Não possui conta?',
        signUpButton: 'Crie aqui',
        signIn: 'Entre',
        loginFormSubtext: 'Insira seus dados abaixo.',
        form: {
            email: 'E-mail',
            emptyEmail: 'E-mail é obrigatório',
            invalidEmail: 'Endereço de e-mail precisa ser válido.',
            password: 'Senha',
            emptyPassword: 'Senha é obrigatória',
            forgotPassword: 'Esqueceu sua senha? / Primeiro acesso',
            button: 'Entrar'
        }
      },
      forgotPassword: {
        title: 'Esqueceu sua senha? / Primeiro acesso',
        subtitle: 'Insira seu email abaixo.',
        form: {
            email: 'E-mail',
            button: 'Enviar'
        }
      },
      forgotPasswordConfirm: {
        title: 'Nova Senha',
        subtitle: 'Insira sua nova senha abaixo.',
        form: {
            password: 'Senha',
            emptyConfirmPassword: 'Confirmação Senha é obrigatória',
            confirmPassword: 'Confirmação de senha',
            button: 'Enviar'
        }
      },
      nav: {
        uploadCSV: 'Upload de Arquivos',
        users: 'Usuários',
        fileList: 'Listagem de Arquivos',
        buttons: {
          profile: 'Perfil',
          settings: 'Configurações',
          logout: 'Sair'
        }
      },
      uploadCSV: {
        title : 'Upload de Arquivos',
        descriptionButton: 'Arraste os arquivos aqui, ou clique para selecioná-los.',
        fileList: 'Arquivos'
      },
      users: {
        title : 'Usuários',
        createButton : 'Novo Usuário',
        search: 'Procurar usuário...',
        table: {
            head: { name: 'Nome', email: 'Email', active: 'Ativo', profile: 'Perfil' },
            row: { true: 'Sim', false: 'Não' }
        }
      },
      registerUser: {
        title : 'Novo Usuário',
        form: {
           name: 'Nome',
           email: 'E-mail',
           password: 'Senha',
           confirmPassword: 'Confirmação de Senha',
           profile: 'Perfil',
           profileValues: { user: 'Usuário', admin: 'Administrador' },
           register: 'Cadastrar'
        }
      },
      fileList: {
        title : 'Listagem de Arquivos',
        table: {
            head: { files: 'Arquivos' }
        }
      }
    }
  }
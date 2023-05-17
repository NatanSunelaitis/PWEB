function validacao() {
    var nome = document.principal.elements["nome"].value;
    var email = document.principal.elements["email"].value;
    var comentario = document.principal.elements["comentario"].value;
    var pesquisa = document.principal.elements["pesquisa"].value;

    if (nome.length < 10) {
      alert("O nome deve ter no mínimo 10 caracteres!");
      return false;
    }

    if (!email.includes("@") || !email.includes(".")) {
      alert("O email é inválido!");
      return false;
    }

    if (comentario.length < 20) {
      alert("O comentário deve ter no mnínimo 20 caracteres.");
      return false;
    }

    if (pesquisa === "nao") {
      alert("Que bom que você voltou a visitar esta página!");
    } else {
      alert("Volte sempre a esta página!");
    }
    return true;
  }
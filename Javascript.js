document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('form-agendamento');
  
    form.addEventListener('submit', function(event) {
      event.preventDefault();
  
      const nome = document.getElementById('nome').value.trim();
      const telefone = document.getElementById('telefone').value.trim();
      const data = document.getElementById('data').value;
      const hora = document.getElementById('hora').value;
      const servico = document.getElementById('servico').value;
  
      if (!nome || !telefone || !data || !hora || !servico) {
        alert('Por favor, preencha todos os campos.');
        return;
      }
  
      alert(`Obrigado, ${nome}! Seu agendamento para ${servico} foi realizado com sucesso para o dia ${data} às ${hora}.`);
      form.reset();
    });
  });
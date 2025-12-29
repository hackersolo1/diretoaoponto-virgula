// Switch entre tabs
function switchTab(event, tabName) {
    // Remove active de todas as tabs
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelectorAll('.tab-content').forEach(content => {
        content.classList.remove('active');
    });

    // Adiciona active na tab clicada
    event.currentTarget.classList.add('active');
    document.getElementById(tabName).classList.add('active');
}

// Copiar código
function copyCode(button) {
    const codeBlock = button.closest('.code-example').querySelector('code');
    const text = codeBlock.textContent;

    navigator.clipboard.writeText(text).then(() => {
        const originalText = button.innerHTML;
        button.innerHTML = '<i class="fas fa-check"></i> Copiado!';
        button.style.background = 'rgba(34, 197, 94, 0.2)';
        button.style.color = '#22c55e';
        button.style.borderColor = 'rgba(34, 197, 94, 0.2)';

        // Reset button after 2 seconds
        setTimeout(() => {
            button.innerHTML = originalText;
            button.style.background = '';
            button.style.color = '';
            button.style.borderColor = '';
        }, 2000);
    }).catch(err => {
        console.error('Erro ao copiar: ', err);
        button.innerHTML = '<i class="fas fa-times"></i> Erro';
        button.style.background = 'rgba(239, 68, 68, 0.2)';
        button.style.color = '#ef4444';
        button.style.borderColor = 'rgba(239, 68, 68, 0.2)';

        setTimeout(() => {
            button.innerHTML = originalText;
            button.style.background = '';
            button.style.color = '';
            button.style.borderColor = '';
        }, 2000);
    });
}
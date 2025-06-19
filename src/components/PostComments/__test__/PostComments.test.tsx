import { fireEvent, render, screen } from '@testing-library/react';

import PostComment from '..';
import PostComments from '..';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });

    
        it('Deve adicionar e exibir dois comentários', () => {
        render(<PostComments/>);

        const primeiroComentario = 'Primeiro comentário inserido';
        const segundoComentario = 'Segundo comentário inserido';
        const commentTextarea = screen.getByTestId('comment-textarea');
        const commentButton = screen.getByTestId('comment-button');

        
        fireEvent.change(commentTextarea, {
            target: {
                value: primeiroComentario,
            },
        });
        fireEvent.click(commentButton);
        
    
        fireEvent.change(commentTextarea, {
            target: {
                value: segundoComentario,
            },
        });
        fireEvent.click(commentButton);

        expect(screen.getByText(primeiroComentario)).toBeInTheDocument();
        expect(screen.getByText(segundoComentario)).toBeInTheDocument();
        expect(screen.getAllByTestId('post-comment')).toHaveLength(2);
    });
});
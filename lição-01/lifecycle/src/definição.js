/*
    Estado e Ciclo de Vida

    - Inicialização;
    - Montagem;
    - Atualização;
    - Desmontagem;



    INICIALIZAÇÃO
    - props e state

    MONTAGEM
    - componentWillMount // Função do React
    - render
    - componentDidMount // Função do React

    ATUALIZAÇÃO
        PROPS
            - componentWillRceiveProps // Função do React
            - shouldComponentUpdate // Função do React
                sim                 não
            componentWillUpdate
            render
            componentDidUpdate

        STATE
            - shouldComponentUpdate
                sim                 não
            componentWillUpdate
            render
            componentDidUpdate

    DESMONTAGEM
    - componentWillUnmount 


    Obs: 
        Nenhum componente pai ou filho deve saber se outro componente possui estado ou não.

        O estado é apenas loca ao componente e caso seja necessário enviar algum atributo para outro então é feito via props.
*/
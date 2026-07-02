window.addEventListener('DOMContentLoaded', () => {
    const tiles = Array.from(document.querySelectorAll('.tile'));
    const displayPlayer = document.querySelector('.display_player');
    const resetButton = document.querySelector('#reset');
    const announcer = document.querySelector('.announcer');


    let board = ['', '', '', '', '', '', '', '', ''];

    let currentPlayer = 'X';
    let isGameActive = true;

    const PLAYERX_WON = 'PLAYERX_WON';
    const PLAYERO_WON = 'PLAYERO_WON';
    const TIE = 'TIE';




    /*
        Indexes within the board
        [0] [1] [2]
        [3] [4] [5]
        [6] [7] [8]

    */

    const winningConditions = [
        [0, 1, 2],
        [3, 4, 5], 
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]

    ]


    function handleResultValidation() {
        let roundWon = false;

        for (let i= 0; i <= 7; i++) {
            const winCondition = winningConditions[i];
            const


        }

    }

    
    const updateBoard = (index) => {
        board[index] = currentPlayer;
    };
    
    
    const changePlayer = () => {
        displayPlayer.classList.remove(`player${currentPlayer}`);
        currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        displayPlayer.innerHTML = currentPlayer;
        displayPlayer.classList.add(`player${currentPlayer}`);
        
    }
    
    const isValidAction = (tile) => {
        if(tile.innerHTML === 'X' || tile.innerHTML === 'O'){
            return false;
        }

        return true;
    };

    const userAction = (tile, index) => {
        if(isValidAction(tile) && isGameActive){
            tile.innerText = currentPlayer;
            tile.classList.add(`player${currentPlayer}`);
            updateBoard(index);

            changePlayer();

        }
    }

    const resetBoard = () => {
        board = ['', '', '', '', '', '', '', '', ''];
        isGameActive = true;
        announcer.classList.add('hide');

        if(currentPlayer === 'O') {
            changePlayer();
        }

        tiles.forEach(tile => {

            tile.innerHTML = '';
            tile.classList.remove('playerX');
            tile.classList.remove('playerO');
        });
    }

    tiles.forEach( (tile, index) => {
        tile.addEventListener('click', () => userAction(tile, index));
    });

    resetButton.addEventListener('click', resetBoard)


});
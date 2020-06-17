// very bad script by Literal Line


console.log('custom asking boxes loaded!');

askingBox = document.getElementById('asking-box').style;
question = document.getElementById('question').style;
answer = document.getElementById('answer').style;


defaultAskingBox = function() {
    askingBox.left = '0';
    askingBox.bottom = '0';
    askingBox.right = '0';
    askingBox.removeProperty('transform');
    askingBox.backgroundColor = 'rgba(33, 33, 33, 0.7)';
    askingBox.removeProperty('border');
    askingBox.removeProperty('borderRadius');
    askingBox.fontFamily = 'sans-serif';

    question.margin = '0 10px';
    question.marginTop = '10px';
    question.removeProperty('paddingBottom');
    question.fontSize = '12px';
    question.color = '#FFFFFF'
    question.removeProperty('borderBottom');

    answer.border = 'none';
    answer.background = 'none';
    answer.width = '100%';
    answer.font = 'inherit';
    answer.fontSize = '16px';
    answer.color = '#FFFFFF';
    answer.padding = '10px';
    answer.boxSizing = 'border-box';
}

prettyAskingBox = function() {
    askingBox.left = '50%';
    askingBox.bottom = '50%';
    askingBox.transform = 'translateX(-50%)';
    askingBox.backgroundColor = '#FFFFFF';
    askingBox.border = '2px solid #000000';
    askingBox.borderRadius = '3px';
    askingBox.fontFamily = 'Lato';

    question.margin = '0 10px';
    question.marginTop = '10px';
    question.paddingBottom = '10px';
    question.fontSize = '12px';
    question.color = '#000000';
    question.borderBottom = '1px solid #000000';

    answer.border = 'none';
    answer.background = 'none';
    answer.width = '100%';
    answer.font = 'inherit';
    answer.fontSize = '16px';
    answer.color = '#000000';
    answer.padding = '10px';
    answer.boxSizing = 'border-box';
}


defaultAskingBox();
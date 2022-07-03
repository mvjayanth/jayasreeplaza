function submit(){
}

function onLoad(){
    var flatDetails = [
         ['101', 'Narasimha Rao'],
         ['102', 'Ravi Kumar'],
         ['103', 'Murali Krishna'],
         ['201', 'Lalith Dasari'],
         ['202', 'Narottam'],
         ['203', 'Arjun'],
         ['301', 'BPRD Prasad'],
         ['302', 'Dillip'],
         ['303', 'Vasanthi'],
         ['401', 'Chandra Mouli'],
         ['402', 'M Viswa Jayanth'],
         ['403', 'Srinivas']
    ]
    var months = [
        'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'
   ]

    flatDetails.map((flat) => {
        const _option = '<option value="' + flat[0] + '">' + flat + '</option>'
        $('#getFlatNo').append(_option)
    });

    months.map((month) => {
        const _option = '<option value="' + month + '">' + month + " " + new Date().getFullYear() + '</option>'
        $('#getMonthYear').append(_option)
    })

}


function printReceipt(){
    var date = new Date().toLocaleDateString();
    var flatNo = $('#getFlatNo').val();
    var flatNoName = $('#getFlatNo option:selected').text().split(',')[1];
    var forMonth = $('#getMonthYear option:selected').text();
    var amount = $('#getAmount').val();
    var paymode = $('#getPayMode').val();

if(flatNoName != undefined && forMonth != 'Select') {
    $('#date').html(date);
    $('#flatNo').html(flatNo);
    $('#flatNoName').html(flatNoName);
    $('#forMonth').html(forMonth);
    $('#amount').html('&#8377 ' + amount);
    $('#payMode').html(paymode);
}
else{
    alert('Select Flat and Month');
    return
}

    window.print();

}
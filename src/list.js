

function main()
{

var tbMain = document.getElementById("tbmain");

for (i=0; i<ary_TitleData.length; i++) 
{
	var new_row = tbMain.insertRow(i);
	new_row.id = "tbmain" + i;
	var new_title_cell = new_row.insertCell(0);
	new_title_cell.innerHTML = ary_TitleData[i];
	
	var char_cell = 1;
	
	for (j=0; j<ary_CharacterData.length; j++)
	{
		if (ary_CharacterData[j][2][i] == 1)
		{
			var new_char_cell = new_row.insertCell(char_cell);
			char_cell++;
			
			//new_char_cell.innerHTML = ary_CharacterData[j][1];
			
			var new_img = document.createElement('img');
            new_img.src = str_ImgPath + ary_CharacterData[j][3];
            new_char_cell.appendChild(new_img);
			
			var new_br = document.createElement('br');
			new_char_cell.appendChild(new_br);
			
			var new_text = document.createTextNode(ary_CharacterData[j][1]);
			new_char_cell.appendChild(new_text);
			
			//new_char_cell.innerHTML = ary_CharacterData[j][1];
		}
	}
}

}
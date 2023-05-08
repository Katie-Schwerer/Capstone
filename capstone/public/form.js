let languageURL = 'https://student2.cs.appstate.edu/schwererkm/events.php';

let titles = ["Name", "Company", "Event Type", "Age Group", "Link"];

$(function start() {
  setFormForResources(languageURL);
  setTable(languageURL, "Search by Age Group and Event Type", "resource", titles);
  buttons()
});

function setFormForResources(url) {
  $.ajax({
    url: url,
    dataType: 'jsonp',
    success: function(data) {
      let age = [];
      let event = [];
      makeListForLanguage(data, age, event);
      let a = [...new Set(age)];
      let e = [...new Set(event)];
      addTo("setup", a, e);
    }
  })
}

function makeListForLanguage(data, age, event) {
  for (let i = 0; i < data.length; i++) {
    age.push(data[i].AgeGroup);
    event.push(data[i].EventType);
  }
}

function addTo(divId, age_group, event) {
  let form = document.createElement('form');
  let label1 = document.createElement('label');
  label1.textContent = "Choose an Age Group: ";
  form.appendChild(label1);

  let select1 = document.createElement('select');
  addOption(select1, age_group);
  form.appendChild(select1);

  let label2 = document.createElement('label');
  label2.textContent = "Choose an Event: ";
  form.appendChild(label2);

  let select2 = document.createElement('select');
  addOption(select2, event);
  form.appendChild(select2);


  document.getElementById(divId).appendChild(form);
}

function addOption(select, array) {
  for (let i = 0; i < array.length; i++) {
    let option = document.createElement('option');
    option.textContent = array[i];
    select.appendChild(option);
  }
}

function setTable(url, caption, divId, list) {
  $.ajax({
    url: url,
    dataType: 'jsonp',
    success: function(data) {
      addTable(caption, divId, data, list);
    }
  });
}

function addTable(caption_text, divId, data, list) {
  let table = document.createElement('table');
  addHeading(table, list)
  let caption = document.createElement('caption');
  caption.textContent = caption_text;
  table.appendChild(caption);
  for (let obj of data) {
    addRow(table, obj);
  }
  $(`#${divId}`).html(table);
}

function addHeading(table, list) {
  let row = document.createElement('tr');
  for (let head in list) {
    let cell = document.createElement('th');
    cell.textContent = list[head];
    row.appendChild(cell);
  }
  table.appendChild(row);
}

function addRow(table, obj) {
  let row = document.createElement('tr');
  for (let field in obj) {
    let cell = document.createElement('td');
    cell.textContent = obj[field];
    row.appendChild(cell);
  }
  table.appendChild(row);
}

function buttons() {
  let buttons = $('button');
  let select = document.getElementsByTagName('select');
  buttons[0].addEventListener('click', function() { getLanguage(languageURL, select[0].value, select[1].value) }, false);
}

function getLanguage(url, lang, prof) {
  $.ajax({
    url: url,
    dataType: 'jsonp',
    success: function(data) {
      let f1 = data.filter(
        function(obj) {
            return lang == obj.AgeGroup;
        }
      );
      let f2 = f1.filter(
        function(obj) {
          return prof == obj.EventType
        }
      );
      let table = getLanguageTable("Resources", f2, titles);
      $("#resource").html(table);
    }
  });

}

function getLanguageTable(caption, data, list) {
  let table = "<table>\n";
  table += `<caption>${caption}</caption>`
  table += "<tr>\n";
  for (let i = 0; i < list.length; i++) {
    table += `<th>${list[i]}</th>\n`
  }
  table += "</tr>\n"
  for (let i = 0; i < data.length; i++) {
    table += "<tr>\n";
    table += `<td>${data[i].Name}</td>\n`;
    table += `<td>${data[i].Company}</td>\n`;
    table += `<td>${data[i].EventType}</td>\n`;
    table += `<td>${data[i].AgeGroup}</td>\n`;
    table += `<td>${data[i].Link}</td>\n`;
    table += "</tr>\n"
  }

  table += "</table>"
  return table;
}
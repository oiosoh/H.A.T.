const nav=document.querySelector('nav'), menu=document.querySelector('.menu');
menu.addEventListener('click',()=>nav.classList.toggle('open'));
document.querySelectorAll('nav a').forEach(a=>a.addEventListener('click',()=>nav.classList.remove('open')));
document.querySelectorAll('.expand').forEach(btn=>btn.addEventListener('click',()=>{const panel=btn.nextElementSibling;panel.classList.toggle('open');btn.textContent=panel.classList.contains('open')?'질문 닫기　－':'생각해 볼 질문　＋';}));
const principles=[
['자율성','기술을 사용할지 여부를 충분한 정보를 바탕으로 스스로 결정할 수 있어야 합니다.','당사자는 기술의 목적과 위험을 이해하고 자발적으로 동의했나요?'],
['안전성','기술의 이익뿐 아니라 신체적·정신적 위험과 장기적인 영향을 함께 검토해야 합니다.','위험을 충분히 검증하고 부작용에 대응할 방법이 마련되어 있나요?'],
['정의와 평등','기술의 혜택과 부담이 특정 집단에만 치우치지 않도록 살펴야 합니다.','경제적 여건이나 사회적 조건에 따라 이용 기회가 불공평해지지 않나요?'],
['프라이버시','개인의 신체·뇌·유전 정보 등 민감한 데이터는 목적에 맞게 최소한으로 수집하고 보호해야 합니다.','정보 수집과 활용 범위를 당사자가 알고 통제할 수 있나요?'],
['책임과 투명성','기술의 개발·사용 과정과 의사결정의 근거를 투명하게 공개하고 책임 주체를 분명히 해야 합니다.','문제가 발생했을 때 책임 소재와 구제 절차가 명확한가요?'],
['공익성','개인의 이익을 넘어 사회 전체에 미치는 영향과 공동의 이익을 고려해야 합니다.','기술의 활용이 사회에 가져올 장기적인 이익과 부담은 무엇인가요?']];
document.querySelectorAll('.principle').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.principle').forEach(x=>x.classList.remove('active'));btn.classList.add('active');const p=principles[Number(btn.dataset.i)];document.querySelector('#p-title').textContent=p[0];document.querySelector('#p-desc').textContent=p[1];document.querySelector('#p-question').textContent=p[2];}));
document.querySelectorAll('.step').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.step').forEach(x=>x.classList.remove('active'));btn.classList.add('active');}));

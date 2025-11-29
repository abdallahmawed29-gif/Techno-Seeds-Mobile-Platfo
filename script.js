const crops = {
    cornHybrid: {
        'YA QOOT 5': [
            "هجين فردي أحمر أول هجين مسجل في مصر والشرق الأوسط.",
            "عالي البروتين وسيلاج عالي.",
            "محتوى غني بالفيتامينات والمعادن.",
            "إنتاجية عالية: 5.5 - 6 طن حبوب / هكتار، 70 طن سيلاج / هكتار.",
            "نبات طويل بمجموع خضري قوي وأوراق عريضة.",
            "مجموع جذري قوي بأكثر من صف من الجذور الدعامية.",
            "محصول مبكر 90 يوم، يظل أخضر حتى الحصاد.",
            "مقاوم للأمراض: اللفحة، الذبول، الذبول المتأخر."
        ],
        'GOLD 21': [
            "هجين فردي أصفر غني بصبغة الكاروتين.",
            "إنتاجية عالية: 8.5 - 9 طن حبوب / هكتار، 84 طن سيلاج / هكتار.",
            "نبات طويل بمجموع خضري قوي وأوراق عريضة.",
            "محصول مبكر 90 يوم، يظل أخضر حتى الحصاد.",
            "تحمل جميع ظروف الإجهاد، مقاوم للأمراض."
        ]
    },
    sorghumHybrid: {
        'EKHNATON': [
            "هجين سورجم عالي الإنتاجية.",
            "نبات يصل طوله إلى 2 متر بمجموع خضري قوي.",
            "إنتاجية عالية: 7.3 طن حبوب / هكتار، 60 طن سيلاج / هكتار.",
            "مقاوم للعديد من الأمراض: اللفحة، الذبول، الذبول المتأخر."
        ]
    },
    vegetables: {
        'BERSEEM BALADY I': [
            "مجموع خضري عالٍ جداً.",
            "لون أخضر زاهٍ محتفظ بأعلى نسبة من الكلوروفيل.",
            "خالي من المواد الغريبة كالحشائش والنباتات السامة.",
            "يمتاز بلون أصفر يدل على جودة التقاوي."
        ]
    }
};

const cropTypeSelect = document.getElementById('cropType');
const cropSelectContainer = document.getElementById('cropSelectContainer');
const cropSelect = document.getElementById('cropSelect');
const featuresDiv = document.getElementById('features');
const featuresContent = document.getElementById('featuresContent');

cropTypeSelect.addEventListener('change', () => {
    const type = cropTypeSelect.value;
    cropSelect.innerHTML = '<option value="">اختر الصنف</option>';
    featuresDiv.style.display = 'none';

    if(type) {
        cropSelectContainer.style.display = 'block';
        const options = Object.keys(crops[type]);
        options.forEach(opt => {
            const option = document.createElement('option');
            option.value = opt;
            option.textContent = opt;
            cropSelect.appendChild(option);
        });
    } else {
        cropSelectContainer.style.display = 'none';
    }
});

cropSelect.addEventListener('change', () => {
    const type = cropTypeSelect.value;
    const variety = cropSelect.value;
    featuresContent.innerHTML = '';
    if(variety) {
        crops[type][variety].forEach(feature => {
            const p = document.createElement('p');
            p.textContent = feature;
            featuresContent.appendChild(p);
        });
        featuresDiv.style.display = 'block';
    } else {
        featuresDiv.style.display = 'none';
    }
});

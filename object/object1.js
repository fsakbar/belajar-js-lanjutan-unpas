var mahasiswa = {
    nama: 'Muhamamd Aulia Akbar',
    lulus: true,
    ipSemester: [2.3, 3.3, 3.25, 2.3, 4],
    ipKumulatif: function(){
        var total = o;
        var ips = this.ipSemester;
        for( var i = 0; i < ips.length; i++){
            total+=ips[i];
        }
        return total/ips.length;
    }
}
var _hash = {
  'hash' : function (_0x4ce143) {
    _0x4ce143 = unescape(encodeURIComponent(_0x4ce143));
    var _0x42730e = [0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xca62c1d6];

    var _0x56d461 = (_0x4ce143 += String[`fromCharCode`](0x80))[`length`] / 0x4 + 0x2;

    var _0x2de8c1 = Math[`ceil`](_0x56d461 / 0x10);

    var _0x3bc39b = new Array(_0x2de8c1);

    var _0x49f5fc = 0x0;
    _0x42730e = [0x5a827999, 0x6ed9eba1, 0x8f1bbcdc, 0xca62c1d6];
    _0x56d461 = (_0x4ce143 += String[`fromCharCode`](0x80))[`length`] / 0x4 + 0x2;
    _0x2de8c1 = Math[`ceil`](_0x56d461 / 0x10);
    _0x3bc39b = new Array(_0x2de8c1);
    _0x49f5fc = 0x0;

    for (void 0; _0x49f5fc < _0x2de8c1; _0x49f5fc++) {
      var _0x42730e;

      var _0x56d461;

      var _0x2de8c1;

      var _0x3bc39b;

      var _0x49f5fc;

      _0x3bc39b[_0x49f5fc] = new Array(0x10);
      var _0x1ab6ba = 0x0;

      for (var _0x1ab6ba = 0x0; _0x1ab6ba < 0x10; _0x1ab6ba++) {
        _0x3bc39b[_0x49f5fc][_0x1ab6ba] = _0x4ce143[`charCodeAt`](0x40 * _0x49f5fc + 0x4 * _0x1ab6ba) << 0x18 | _0x4ce143[`charCodeAt`](0x40 * _0x49f5fc + 0x4 * _0x1ab6ba + 0x1) << 0x10 | _0x4ce143[`charCodeAt`](0x40 * _0x49f5fc + 0x4 * _0x1ab6ba + 0x2) << 0x8 | _0x4ce143[`charCodeAt`](0x40 * _0x49f5fc + 0x4 * _0x1ab6ba + 0x3);
      }
    }

    _0x3bc39b[_0x2de8c1 - 0x1][0xe] = 0x8 * (_0x4ce143[`length`] - 0x1) / Math[`pow`](0x2, 0x20);
    _0x3bc39b[_0x2de8c1 - 0x1][0xe] = Math[`floor`](_0x3bc39b[_0x2de8c1 - 0x1][0xe]);
    _0x3bc39b[_0x2de8c1 - 0x1][0xf] = 0x8 * (_0x4ce143[`length`] - 0x1) & 0xffffffff;

    var _0xabec85;

    var _0x23bba6;

    var _0x44f201;

    var _0x202ba2;

    var _0x5d4133;

    var _0x598489 = 0x67452301;
    var _0x59a693 = 0xefcdab89;
    var _0x5d76e1 = 0x98badcfe;
    var _0x2ca94b = 0x10325476;
    var _0x40ff64 = 0xc3d2e1f0;

    var _0x3dca44 = new Array(0x50);

    _0x49f5fc = 0x0;

    for (_0x49f5fc = 0x0; _0x49f5fc < _0x2de8c1; _0x49f5fc++) {
      var _0x18b6d0 = 0x0;

      for (var _0x18b6d0 = 0x0; _0x18b6d0 < 0x10; _0x18b6d0++) {
        _0x3dca44[_0x18b6d0] = _0x3bc39b[_0x49f5fc][_0x18b6d0];
      }

      _0x18b6d0 = 0x10;

      for (_0x18b6d0 = 0x10; _0x18b6d0 < 0x50; _0x18b6d0++) {
        _0x3dca44[_0x18b6d0] = _hash[`ROTL`](_0x3dca44[_0x18b6d0 - 0x3] ^ _0x3dca44[_0x18b6d0 - 0x8] ^ _0x3dca44[_0x18b6d0 - 0xe] ^ _0x3dca44[_0x18b6d0 - 0x10], 0x1);
      }

      _0xabec85 = _0x598489;
      _0x23bba6 = _0x59a693;
      _0x44f201 = _0x5d76e1;
      _0x202ba2 = _0x2ca94b;
      _0x5d4133 = _0x40ff64;
      _0x18b6d0 = 0x0;

      for (_0x18b6d0 = 0x0; _0x18b6d0 < 0x50; _0x18b6d0++) {
        var _0x12f95a = Math[`floor`](_0x18b6d0 / 0x14);

        var _0x136709 = _hash[`ROTL`](_0xabec85, 0x5) + _hash[`f`](_0x12f95a, _0x23bba6, _0x44f201, _0x202ba2) + _0x5d4133 + _0x42730e[_0x12f95a] + _0x3dca44[_0x18b6d0] & 0xffffffff;

        _0x5d4133 = _0x202ba2;
        _0x202ba2 = _0x44f201;
        _0x44f201 = _hash[`ROTL`](_0x23bba6, 0x1e);
        _0x23bba6 = _0xabec85;
        _0xabec85 = _0x136709;
      }

      _0x598489 = _0x598489 + _0xabec85 & 0xffffffff;
      _0x59a693 = _0x59a693 + _0x23bba6 & 0xffffffff;
      _0x5d76e1 = _0x5d76e1 + _0x44f201 & 0xffffffff;
      _0x2ca94b = _0x2ca94b + _0x202ba2 & 0xffffffff;
      _0x40ff64 = _0x40ff64 + _0x5d4133 & 0xffffffff;
    }

    return _hash[`toHexStr`](_0x598489) + _hash[`toHexStr`](_0x59a693) + _hash[`toHexStr`](_0x5d76e1) + _hash[`toHexStr`](_0x2ca94b) + _hash[`toHexStr`](_0x40ff64);
  },
  'f' : function (_0x3b2027, _0x1853db, _0x1f8f35, _0x5bd420) {
    switch (_0x3b2027) {
      case 0x0:
        return _0x1853db & _0x1f8f35 ^ ~_0x1853db & _0x5bd420;

      case 0x1:
      case 0x3:
        return _0x1853db ^ _0x1f8f35 ^ _0x5bd420;

      case 0x2:
        return _0x1853db & _0x1f8f35 ^ _0x1853db & _0x5bd420 ^ _0x1f8f35 & _0x5bd420;
    }
  },
  'ROTL' : function (_0x38faff, _0x45254b) {
    return _0x38faff << _0x45254b | _0x38faff >>> 0x20 - _0x45254b;
  },
  'toHexStr' : function (_0x950b54) {
    var _0x59dfe9 = ``;
    var _0x554673 = 0x7;
    _0x59dfe9 = ``;
    _0x554673 = 0x7;

    for (void 0; _0x554673 >= 0x0; _0x554673--) {
      var _0x59dfe9;

      var _0x554673;

      _0x59dfe9 += (_0x950b54 >>> 0x4 * _0x554673 & 0xf)[`toString`](0x10);
    }

    return _0x59dfe9;
  }
};

module.exports = _hash;

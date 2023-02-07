import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import { getLocation } from '../../app/api/address';
import PropTypes from 'prop-types';

export default function CustomFormSelect({ location, code, onChange, isInvalid, value }) {
  const [locations, setLocations] = useState([]);

  useEffect(() => {
    getLocation(location, code).then(({ data }) => setLocations(data));
  }, [location, code]);

  return (
    <div>
      <Form.Select disabled={locations.length === 0} onChange={(e) => onChange(e.target.value)} isInvalid={isInvalid} defaultValue="">
        <option value="">Pilih lokasi...</option>
        {locations.provinsi.map((location, i) => (
          <option value={JSON.stringify({ label: location.nama, value: location.id })} key={i}>
            {location.nama}
          </option>
        ))}
      </Form.Select>
    </div>
  );
}

CustomFormSelect.defaultProps = {
  location: 'provinsi',
  code: '',
  isInvalid: false,
  value: '',
};

CustomFormSelect.propTypes = {
  location: PropTypes.oneOf(['provinsi', 'kota?id_provinsi=', 'kecamatan?id_kota=', 'kelurahan?id_kecamatan=']).isRequired,
  code: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  onChange: PropTypes.func.isRequired,
};
